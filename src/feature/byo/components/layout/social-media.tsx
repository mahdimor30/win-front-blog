import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import emailIcon from "@/feature/byo/assets/email.svg";
import linkedinIcon from "@/feature/byo/assets/linkedin.svg";
import phoneIcon from "@/feature/byo/assets/phone.svg";
import twitterIcon from "@/feature/byo/assets/twitter.svg";

const data: { text: string; link: string; icon: StaticImport }[] = [
  {
    text: "+372 6346102",
    link: "tel:+3726346102",
    icon: phoneIcon as StaticImport,
  },
  {
    text: "linkedin.com/company/winatalent-fa",
    link: "https://www.linkedin.com/company/winatalent-fa",
    icon: linkedinIcon as StaticImport,
  },
  {
    text: "twitter.com/winatalent_fa",
    link: "https://twitter.com/winatalent_fa?s=11&t=9QchJduHqoI2nkYqL3WYrg",
    icon: twitterIcon as StaticImport,
  },
  {
    text: "info@winatalent.net",
    link: "mailto:Info@winatalent.net",
    icon: emailIcon as StaticImport,
  },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-12 md:flex-col md:gap-[18px]">
      {data.map((item) => (
        <a
          target="_blank"
          href={item.link}
          key={item.text}
          className="flex flex-row-reverse items-center"
        >
          <Image src={item.icon} alt={item.text} />
          <span className="font-lato ml-4 hidden text-sm font-normal text-[#93B5BF] md:block">
            {item.text}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
