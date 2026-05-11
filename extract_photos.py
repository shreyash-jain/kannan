import urllib.request
import re
import os

base_url = "https://sites.google.com/kanaanguestfarm.com/kanaanguestfarm"
pages = [
    "?usp=sharing",
    "/amenities",
    "/backpackers",
    "/camping",
    "/events-at-kanaan",
    "/school-corporate-groups",
    "/nearby"
]

out_dir = r"C:\Aadi\kannan\extracted_photos"
os.makedirs(out_dir, exist_ok=True)

all_urls = set()

for page in pages:
    url = f"{base_url}{page}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            urls = re.findall(r'https://[^"\'`\\]*?lh[0-9]?\.googleusercontent\.com/[^"\'`\\]*', html)
            for u in urls:
                # Clean up any trailing CSS artifacts
                u = u.split(')')[0].split(';')[0].strip()
                # Ensure we get the highest resolution
                if '=w' in u:
                    u = re.sub(r'=w\d+', '=w1920', u)
                all_urls.add(u)
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")

print(f"Found {len(all_urls)} unique photo URLs. Downloading...")

for i, u in enumerate(all_urls):
    try:
        out_path = os.path.join(out_dir, f"photo_{i+1:03d}.jpg")
        if not os.path.exists(out_path):
            urllib.request.urlretrieve(u, out_path)
            print(f"Downloaded {out_path}")
    except Exception as e:
        print(f"Failed to download {u}: {e}")

print("Done extracting photos.")
