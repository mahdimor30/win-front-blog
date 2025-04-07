"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageButton = () => {
  const pathname = usePathname();

  const fa = true;
  return (
    <div className="flex justify-end">
      <a
        target="_blank"
        href="https://winatalent.com/byo"
        className={`font-IranYekan flex flex-col text-2xl font-extrabold ${
          fa ? "text-[#777777]" : "text-[#03DAC3]"
        } ${pathname === "/byo" && "text-[#03DAC3]"}`}
      >
        <span>EN</span>
        <span className="text-xs">For clients</span>
      </a>
      <div className="mx-3 border border-[#777777]" />
      <Link
        className={`text-2xl font-extrabold ${
          fa ? "text-[#03DAC3]" : "text-[#777777]"
        } font-IranYekan ${pathname === "/byo/farsi" && "text-[#03DAC3]"}`}
        href="/byo/farsi"
      >
        <span className="flex flex-col">
          <span> فا</span>
          <span className="text-xs">برای فریلنسرها</span>
        </span>
      </Link>
    </div>
  );
};

export default LanguageButton;
