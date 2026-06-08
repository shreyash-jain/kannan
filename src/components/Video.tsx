import { videoObjectLd } from "@/lib/jsonld";
import type { Vid } from "@/lib/images";
import { site } from "@/lib/site";

// Relative paths (legacy /videos/...) need the site origin in front for
// schema; absolute URLs (Cloudinary) get used as-is.
const absoluteUrl = (u: string) => (u.startsWith("http") ? u : `${site.url}${u}`);

// Inline video used on the marketing pages. Two modes:
//
//   default (B-roll)   — muted, looping, autoplay. No controls.
//                        Ambient background imagery — no narration.
//
//   narrated={true}    — does NOT autoplay. Shows the poster image and
//                        a standard browser play button until the
//                        viewer chooses to play. Audio comes in
//                        unmuted (the narration is the whole point).
//                        Many browsers (notably Brave) block autoplay
//                        on any video that carries an audio track, so
//                        a click-to-play UX is the only one that works
//                        reliably across browsers.
//
// Poster ensures something is on screen if the video has not loaded
// yet. preload="metadata" keeps initial-page transfer small.
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
  /** Show controls + drop autoplay so the viewer chooses to listen. */
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
      {narrated ? (
        <video
          className={className}
          src={video.src}
          poster={video.poster}
          aria-label={video.alt}
          controls
          playsInline
          preload="metadata"
        />
      ) : (
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
      )}
    </>
  );
}