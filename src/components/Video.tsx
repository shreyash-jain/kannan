import { videoObjectLd } from "@/lib/jsonld";
import type { Vid } from "@/lib/images";
import { site } from "@/lib/site";

// Relative paths (legacy /videos/...) need the site origin in front for
// schema; absolute URLs (Cloudinary) get used as-is.
const absoluteUrl = (u: string) => (u.startsWith("http") ? u : `${site.url}${u}`);

// A muted, looping, autoplay B-roll video used inline on the marketing
// pages. Poster ensures something is on screen if the video has not loaded
// yet (or autoplay is blocked). preload="metadata" keeps initial-page
// transfer small — the video bytes only start downloading when the
// element is actually visible.
export function Video({
  video,
  className,
  schemaName,
  schemaDescription,
  schemaUploadDate,
}: {
  video: Vid;
  className?: string;
  schemaName?: string;
  schemaDescription?: string;
  schemaUploadDate?: string; // ISO 8601 date
}) {
  return (
    <>
      {schemaName && schemaDescription && schemaUploadDate && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              videoObjectLd({
                name: schemaName,
                description: schemaDescription,
                thumbnailUrl: absoluteUrl(video.poster),
                uploadDate: schemaUploadDate,
                contentUrl: absoluteUrl(video.src),
              }),
            ),
          }}
        />
      )}
      <video
        className={className}
        src={video.src}
        poster={video.poster}
        aria-label={video.alt}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </>
  );
}