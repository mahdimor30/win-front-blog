import Image from "next/image";

import { type components } from "@/api/strapi";
import { getStrapiMedia } from "@/utils/api-helpers";

type MediaProps = components["schemas"]["SharedMediaComponent"];

export default function Media({ file }: MediaProps) {
  const imgUrl = file?.url ? getStrapiMedia(file.url) : undefined;
  return (
    <div className="xl:h-112 2xl:h-128 mt-8 flex h-72 items-center justify-center sm:h-80 lg:mt-0 lg:h-96">
      <Image
        src={imgUrl ?? ""}
        alt={file?.name ?? "none provided"}
        className="h-full w-full overflow-hidden rounded-lg object-cover"
        width={400}
        height={400}
      />
    </div>
  );
}
