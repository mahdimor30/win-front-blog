import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

import heroImg from "@/feature/byo/assets/hero_img.svg";
import logoSrc from "@/feature/byo/assets/logo_byo.svg";

import ButtonByo from "../ui/button";
import LanguageButton from "./language-button";

const HeroByo = () => {
  return (
    <div className="flex flex-col justify-between bg-[#FFD685] px-8 md:flex-row-reverse">
      <div className="mt-9 flex justify-start md:block">
        <LanguageButton />
      </div>
      <div className="flex flex-col items-center" dir="">
        <Image
          src={logoSrc as StaticImport}
          alt="logo"
          className="mt-12 h-[231px] w-[298px] md:h-[272px] md:w-[360px]"
        />
        <h1
          dir="rtl"
          className="font-IranYekan mt-7  text-center text-[27px] font-extrabold text-[#564063] md:text-3xl"
        >
          دریافت درآمد ارزی به کمک پلتفرم WINaTALENT
        </h1>
        <p
          dir="rtl"
          className="font-IranYekan mt-7 text-justify text-base font-bold leading-7 text-[#777777] md:w-[518px] md:text-center"
        >
          به کمک سرویس BYO (Bring Your Own) شما می‌توانید از زیرساخت‌های{" "}
          <span className="font-extrabold text-[#564063]">
            {" "}
            دریافت درآمد ارزی{" "}
          </span>
          ، حساب واسطه و مدیریت پروژه پلتفرم WINaTALENT برای شغل ریموت خود
          استفاده کنید.
        </p>
        <ButtonByo>
          <Link href="https://winatalent.com/auth/freelancer"> شروع کنید</Link>
        </ButtonByo>
      </div>
      <div className="mb-8 mr-12 mt-16 hidden md:block">
        <Image src={heroImg as StaticImport} alt="hero" className=" " />
      </div>
    </div>
  );
};

export default HeroByo;
