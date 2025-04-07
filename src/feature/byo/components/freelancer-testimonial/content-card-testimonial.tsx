import Image from "next/image";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { type TypeTtestimonial } from "@/feature/byo/types";
import { generateProfileName } from "@/feature/byo/utils/profile-name";

import QuotationMark from "./quotation-mark";

const ContentCardTestimonial = ({
  avatar_url,
  full_name,
  company_name,
  text,
  background_image_url,
  avatar_bg_color,
}: TypeTtestimonial) => {
  return (
    <div dir="rtl" className="flex w-full flex-col gap-3 p-5">
      <QuotationMark className="absolute -top-4 left-1" />
      <QuotationMark className="absolute left-[262px] top-[390px] rotate-180 md:left-[338px] md:top-[332px]" />
      <div className="flex items-end gap-6 py-1">
        <Avatar className="h-16 w-16 uppercase">
          <AvatarImage src={avatar_url} />
          <AvatarFallback className={avatar_bg_color}>
            {generateProfileName(full_name)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start justify-start gap-3">
          <p className="text-start text-xs font-semibold text-[#333] md:text-sm">
            {full_name}
          </p>
          <p className="text-start text-xs font-light leading-3 text-[#555] md:text-sm">
            {company_name}
          </p>
        </div>
      </div>
      <div className="z-10 max-h-[112px] max-w-[360px] flex-1">
        <p
          dir="rtl"
          className="text-justify text-[11px] font-light text-[#777] md:text-sm md:leading-4"
        >
          {text}
        </p>
      </div>

      {background_image_url ? (
        <Image
          src={background_image_url}
          width={240}
          height={160}
          alt="logo_compony"
          className="z-0 mx-auto mt-10 h-32 w-44 object-contain md:h-[160px] md:w-[240px]"
        />
      ) : (
        <p>No photo</p>
      )}
    </div>
  );
};

export default ContentCardTestimonial;
