import { videoObjectLd } from "@/lib/jsonld";
import type { Vid } from "@/lib/images";
import { site } from "@/lib/site";

// Relative paths (legacy /videos/...) need the site origin in front for
// schema; absolute URLs (Cloudinary) get used as-is.
const absoluteUrl = (u: string) => (u.startsWith("http") ? u : `${site.url}${u}`);

// Inline video used on the marketing pages. Two modes:
//
//   default (B-roll)   — muted, looping, autoplay. No controls. The
//                        clip has no narration; the silent loop is
//                        ambient background imagery.
//
//   narrated={true}    — autoplay starts muted (browser autoplay rules)
//                        but a controls bar is shown so the visitor can
//                        unmute and hear the founder narration. Looping
//                        is off so the clip plays through cleanly once.
//
// Poster ensures something is on screen if the video has not loaded
// yet (or autoplay is blocked). preload="metadata" keeps initial-page
// transfer small — the video bytes only start downloading when the
// element is actually visible.
export function Video({
  video,
  className,
  narrated = false,
  schemaName,
  schemaDescription,
  schemaUploadDate,
}: {
  video: Vid;
  className?: string;
  /** Show controls + drop loop so the viewer can unmute and listen. */
  narrated?: boolean;
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
        playsInline
        preload="metadata"
        {...(narrated ? { controls: true } : { loop: true })}
      />
    </>
  );
}