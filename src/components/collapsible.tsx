"use client";

import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

interface Props {
    children: React.ReactNode
    textButton: string
    srcIcon: StaticImport
}

const Collapse = ({ children, textButton, srcIcon }: Props) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  return (
    <div className="bg-[#fbfbfb] border-[0.5px] border-[#777777] mb-[30px] px-[5px] py-[7px] rounded-[8px]">
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        type="button"
        className="bg-inherit text-[#555555] cursor-pointer p-[18px] w-full border-none text-left outline-none text-[15px] flex items-center"
      >
        <Image
          className={`${isCollapsed ? "-rotate-90" : ""}`}
          src={srcIcon}
          alt="arrow"
          width={20}
          height={20}
        />
        <span className="mr-[10px] font-bold text-[22px]">{textButton}</span>
      </button>
      <div className={`text-left bg-inherit text-[#666666] ${!isCollapsed ? "hidden" : "block overflow-hidden"}`}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
