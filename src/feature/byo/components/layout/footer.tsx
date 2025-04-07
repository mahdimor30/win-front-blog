import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import logoSrc from "@/feature/byo/assets/logo_footer.svg";

import SocialMedia from "./social-media";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-[#334055]">
      <div className="my-[60px] flex flex-col items-center gap-10 md:flex-row-reverse md:gap-[121px]">
        <Image
          src={logoSrc as StaticImport}
          alt="logo"
          className="ml-10 mr-20"
        />
        <SocialMedia />
      </div>
      <p className="font-lato mb-4 text-sm font-light text-[#FFFFFF]">
        All the Rights Reserved For WINaTALENT.com
      </p>
    </div>
  );
};

export default Footer;
