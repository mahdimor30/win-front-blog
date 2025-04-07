'use client';

import React, { type FC } from "react";
// import SvgIcon from "../icons/SvgIcon";

interface Props {
  children: React.ReactNode;
  textButton: string;
}

const Collapse: FC<Props> = ({ children, textButton }) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  return (
    <div
      dir='rtl'
      className='bg-[#fbfbfb] border-[0.5px]  mb-6 rounded-lg w-full '
    >
      <div
        onClick={() => setIsCollapsed(!isCollapsed)}
        className='
        pl-2 
            bg-inherit
            text-[#555555]
            cursor-pointer
         justify-between
            w-full
            border-none
            text-left
            outline-none
            text-[15px]
            flex
            items-center
           
           
        '
      >
        <div className='flex items-center '>
          <div className='h-12 w-2 bg-[#02DAC5] ' />
          <span className='font-IranYekan font-bold text-base text-[#02DAC5] mr-2'>
            پرسش 
          </span>
          <span className='font-IranYekan font-bold text-base text-[#02DAC5] mr-1'>
            :
          </span>
          <span className='mr-4 font-normal md:font-bold text-xs md:text-base font-IranYekan text-start '>
            {textButton}
          </span>
        </div>
        {/* <SvgIcon
          iconName='arrow'
          svgProps={{
            className: ` ${isCollapsed && "rotate-90"}`,
            width: "21pxs",
            height: "14px",
          }}
        /> */}
      </div>
      {isCollapsed && (
        <div
          className={` flex   items-center overflow-hidden bg-white text-[#666666] font-IranYekan transition-transform  `}
        >
          <div className='w-2 h-14 bg-[#CCCCCC]'></div>
          <span className='  text-base font-bold text-[#CCCCCC]  mr-1 '>
            پاسخ
          </span>
          <span className='text-base font-bold text-[#CCCCCC]  mr-1 '>:</span>
          <span className='mr-8 text-[#555555] '>{children}</span>
        </div>
      )}
    </div>
  );
};

export default Collapse;
