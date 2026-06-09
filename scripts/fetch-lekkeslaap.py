"""
One-shot pull of the property's own photos from the LekkeSlaap listing.

Photos are served via imgix.net and can be requested at higher resolution
by rewriting the query string. We strip the gallery's thumbnail crops
(ar=1:1, fit=crop, w=540) and ask for the natural-aspect-ratio original
at up to 2400 wide, q=90.
"""

from __future__ import annotations

import sys
from pathlib import Path
from urllib.parse import urlparse, urlencode
import urllib.request

OUT = Path(__file__).resolve().parent.parent / "public" / "images" / "lekkeslaap"
OUT.mkdir(parents=True, exist_ok=True)

# Raw URLs from the WebFetch — both the 1600 cover and the 540 thumbs.
RAW = [
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAebc48818d4fd0b5bee0b72f29a573cc1a23d1d6724397dd89740c729fc858849945bfb11f440f47aa2eaa0bc24d9d760e6b6",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA9c760dc1ee0220f1d0231b94f39a769088ae79ab432f141f30f148a8130fc81e07d231d1d79bb5b1851b579925a427d9ed9d",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA73e68ca0897725a58d2b8ec14b5b6837398a85c2108d17b37ff1e8ed4d8581685a1db1225369a9e2ca3ece70fbf70adf2d9d",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA8b276acf2ad9a98aed8cc70f344a8fb52d5931cbf905e99f82aac087d2c70a407bd5f4ec25aad4151aece86a70d27aa5b693",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAabfb1eb05c8108e0c4ffecf4adb1fd9f5b627a2a10686515975c3d783098b0a99ed1c3a65d15207d5fee77bcf43a69cdf256",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA39cb6df15eae01bfb8a59f2bd85e80cb5144e1448767c3cfc0575ef1d20bcabaf3c7b344404fd2a63da6dbbb05783d8953c3",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA65383a149a17454b4afe85882e06c8b877e3ce6bceb55603caa67d0e246ed99707f2b03adb679f3c43b085b90c125f81f89c",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAc0755eea9a6ccdaad052dde013e26d222c1350816dc214f0b9a28a838dbd9174b5357810d4635d09f65ea91f998666c1bde0",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA1da470fe8ea3af97ca975d61c89752d7324347e29fce133be6bcd6d5493842c0cd71973b74f23c7ff556498aff861b43c6c4",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAa8626004a5c1d24f9f05cecc9a114bd4d96d34287d56d659a021933006ab69a50b389b0acffb61596bde4246a039bee17b1c",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAd0d16c4e2b44c4784123d0c1535cee9ac3bf84dbc9448196cde4b7c8a1a2059c208947e809f65f00424df7becc970c04b831",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA5616ccef3f9fe88d57c24df41704fb3b3fe7ea27579731e1da791d4f4789f3151e40dedfec3e72536eb77528dcb4b8dcf705",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA1303d9d362a390ab647d6fa8bcc3977920028d5daf0d4285fdbac59c17f33a8ce9a2925e77eb9465ff17c0b829f4045ff570",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAa72accb4c8510299bc38781eaaff7e087ed70c111d271218c495f2e1c40e1d405d9f9b191c141dcb0d9676df4174fb978586",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA829db8d61bc0d00b3f90f3951d5332116f4b847f0eb66069ee7c34ee6ece1eeff8008a2b469950cf6200d3cad59285dc8364",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA090781491ff098e8d8ed2a177b091efb6d5a2786843d978f5446484da45150d8fc613fe554518aead2b332e0129ab4ebe976",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAfa90ad9c73963be190eb5684e83c0c9b2313c6e8e75cba3af85d795f242f8e7c5f51f13673be733a3cb059638da8e25f7a00",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA49cb6e3cd3fa1b596be7d0270bc6429fcbd693ec34d3ea58f3e40f4b2c577c67f7a4916965524a32359f123cda3a8c7b4dcd",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA1e3da8ff6fb6578506579e1f6d050821c5297cd324cf9c91d5fb8c09094a1a577d28d74d2e1d7751d5a4543287bce103b045",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA6c3fd4a684d92c1e88f43bfffda256542b3ab28b98297c4bf9d3f12d807df6c3b029566cb5fb8fcedc0ab871f1ed8dc860c3",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA1295fb342c3ae5c081510bdeecefee34523b7b9e604a65d9a1253cdb99ec129a86aebcc20de40ef15cd01a1a70ea681a619e",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA215cc283293122821551858758fde8d77f2378527b72084cbc9bf51c7ff9837a39b40b3cdc5e418f93eda7d5e7d3e73ab322",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA96fd45eae4402cba895976e0e9fb82f2c0a48174bedb5961b6a8aae109ede508cbcc7606ffe0a1dfdb5403ebab4b814fa7d6",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA784e5da0142634cf62e4546df28f57e39b467a606a1e5d92b402d83ed4febc29dfad44b2ae776cf0685cb27534b0d45dad76",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAb4911583895b9187b2f52bfd4cc3cf09ac7a1ab666818c2aeeb8e0f5d99376002547290ab633c481cd5b47d4a103d1fc1acf",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAfbecfee3f3ef417afca3cb98a89ac81bc2171b698ea44a71481d1e0bfb5eb2b2a853b3bdafcf36876d39968ef755203888fa",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAAfa2289dbeea8f0e974abc34ff74dd9c7a43bac096db04ec01af31c0d69be4984d35e096821f64c484dff0a4ff400d3354eb1",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA3926c72c1065269156408e0c38bb990343a657164127a85c17b43cd4e111187cc0490456d4c751019f95bde85851578cead6",
    "https://travelground.imgix.net/AAEAAQAAAAAAAAAAAAAA474675e016f798cf0123e37b333b36096f10ba77c7893e81b675e5b260f12e1bca3b4f2b4d6fd3c02335e2269fbbec2a8ca5",
]

# Strip everything before the path — the path itself is the unique key.
seen: set[str] = set()
unique: list[str] = []
for url in RAW:
    path = urlparse(url).path
    if path in seen:
        continue
    seen.add(path)
    unique.append(url)


def hi_res(url: str) -> str:
    """Drop thumbnail crops, ask for natural aspect at 2400 wide, q=90."""
    base = url.split("?")[0]
    qs = urlencode(
        {
            "w": 2400,
            "auto": "format,compress",
            "q": 90,
            "fm": "jpg",
        }
    )
    return f"{base}?{qs}"


def download(url: str, dst: Path) -> int:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (kanaan-asset-fetch)",
            "Referer": "https://www.lekkeslaap.co.za/",
        },
    )
    with urllib.request.urlopen(req, timeout=30) as r:
        data = r.read()
    dst.write_bytes(data)
    return len(data)


def main() -> int:
    print(f"Fetching {len(unique)} unique photos to {OUT}\n")
    total = 0
    for i, url in enumerate(unique, 1):
        dst = OUT / f"ls-{i:02d}.jpg"
        try:
            size = download(hi_res(url), dst)
            total += size
            print(f"  ls-{i:02d}.jpg  {size/1024:7.1f} KB")
        except Exception as e:
            print(f"  FAIL ls-{i:02d}: {e}", file=sys.stderr)
    print(f"\nDone. {total/1024/1024:.1f} MB across {len(unique)} files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())