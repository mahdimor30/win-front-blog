import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { type FC } from "react";

import tdot from "@/feature/byo/assets/3dot.svg";
// import SvgIcon from "@/feature/byo/icons/SvgIcon";

export interface ICart {
  image: React.ReactNode;
  number: string;
  iconColor: {
    bgColor: string;
    textColor: string;
  };
  text: string;
  isReverse?: boolean;
  index?: number;
  data_length?: number;
}

const Cart: FC<ICart> = ({ iconColor, image, number, text, isReverse }) => {
  return (
    <div
      className={`mb-2 flex w-full flex-col px-3 md:mb-0 md:px-0 ${
        isReverse
          ? "items-end md:flex-row-reverse md:items-stretch"
          : "md:flex-row"
      } `}
    >
      <div
        className={`my-5 hidden flex-1 items-center md:flex ${
          !isReverse && "flex-row-reverse"
        } `}
      >
        <div
          className={`ml-20 mr-20 flex items-center gap-10 ${
            isReverse && "flex-row-reverse"
          }`}
        >
          {image} 
          <Image src={tdot as StaticImport} alt="3do  t" className={`${isReverse && "rotate-180"}`} />
        </div>
      </div>

      <div className={`relative hidden border-2 border-[#CCCCCC] md:block`}>
        <div
          className={`absolute -left-8 top-24 h-16 w-16 rounded-full ${iconColor.bgColor}`}
        >
          <span
            className={`absolute left-[15px] top-3 z-50 text-[28px] font-extrabold ${iconColor.textColor}`}
          >
            {number}
          </span>
        </div>
      </div>

      <div
        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full md:hidden ${iconColor.bgColor}`}
      >
        <span
          className={`z-50 text-[28px] font-extrabold ${iconColor.textColor}`}
        >
          {number}
        </span>
      </div>

      {/* {data_length
        ? data_length - 1 !== index && (
            <SvgIcon
              iconName='line'
              wrapperStyle='relative md:hidden'
              svgProps={{
                className: `  ${
                  isReverse && "line_rotate -left-[294px]"
                }  absolute    -top-[45px] left-[60px]  `,
               
              }}
            />
          )
        : ""} */}

      <div dir="rtl" className="flex flex-1 items-center justify-center">
        <p className="font-IranYekan text-justify text-sm font-bold leading-6 text-[#555555] md:w-96 md:text-lg md:leading-8">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Cart;
