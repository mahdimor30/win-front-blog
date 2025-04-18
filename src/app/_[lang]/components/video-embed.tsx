// components/VideoEmbed.tsx

import React from "react";

import { type components } from "@/api/strapi";

type VideoEmbedProps = components["schemas"]["SharedVideoEmbedComponent"];

const getEmbedUrl = (videoUrl: string): string | null => {
  const youtubeRegex =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|watch\?v%3D)([\w-]{11}).*/;
  const youtubeMatch = youtubeRegex.exec(videoUrl);

  if (youtubeMatch && youtubeMatch[2]?.length === 11) {
    return `https://www.youtube.com/embed/${youtubeMatch[2]}`;
  }

  // Add support for other video platforms here

  return null;
};

export default function VideoEmbed({ url }: VideoEmbedProps) {
  const embedUrl = getEmbedUrl(url ?? "");

  if (!embedUrl) return <div>Invalid video URL</div>;

  return (
    <div className="video-embed pb-56.25 relative my-8 h-72 overflow-hidden lg:h-[450px]">
      <iframe
        title="video"
        src={embedUrl || ""}
        width={"100%"}
        height={"100%"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute left-0 top-0 h-full w-full"
      />
    </div>
  );
}
