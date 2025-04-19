import Image from "next/image";
import { memo } from "react";

import { type components } from "@/api/strapi";
import { getStrapiMedia } from "@/utils/api-helpers";

type MediaProps = components["schemas"]["SharedMediaComponent"];

const Media = memo(({ file }: MediaProps) => {
  const imgUrl = file?.url ? getStrapiMedia(file.url) : undefined;
  const alt = file?.name ?? "none provided";

  if (!imgUrl) return null;

  return (
    <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center sm:h-80 lg:mt-0 lg:h-96">
      <Image
        src={imgUrl}
        alt={alt}
        className="h-full w-full overflow-hidden rounded-lg object-cover"
        width={400}
        height={400}
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHiQlJyAlJyQ1MTAyMDIxMTQ4ODk4NDQ4RjM9PT0zPUZGRkZGRkZGRkb/2wBDARUXFyAeIBogHiAiISAhRkYhRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkZGRkb/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
});

Media.displayName = "Media";

export default Media;
