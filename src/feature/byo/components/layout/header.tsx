import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import logoSrc from "@/feature/byo/assets/logo_header.svg";

const Header = () => {
  return (
    <div dir="rtl" className="flex items-center bg-[#334055] py-5">
      <a target="_blank" href="https://winatalent.com/">
        <Image src={logoSrc as StaticImport} alt="logo" className="mr-20 ml-10" />
      </a>
      <a
        target="_blank"
        dir="rtl"
        href="https://winatalent.com/"
        className="font-IranYekan text-sm font-extrabold text-[#EEEEEE]"
      >
        خـــانه
      </a>
    </div>
  );
};

export default Header;
