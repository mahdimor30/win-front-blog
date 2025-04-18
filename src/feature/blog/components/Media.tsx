import Image from "next/image";

import { type components } from "@/api/strapi";
import { getStrapiMedia } from "@/utils/api-helpers";



type MediaProps = components["schemas"]["SharedMediaComponent"];


export default function Media({file }: MediaProps ) {
  const imgUrl = file?.url ? getStrapiMedia(file.url) : undefined;
  return (
    <div className="flex items-center justify-center mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
      <Image
        src={imgUrl ?? ""}
        alt={file?.name ?? "none provided"}
        className="object-cover w-full h-full rounded-lg overflow-hidden"
        width={400}
        height={400}
      />
    </div>
  );
}