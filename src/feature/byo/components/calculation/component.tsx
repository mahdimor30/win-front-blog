
import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import bigTitle from "@/feature/byo/assets/bgTitle.svg";
import card from "@/feature/byo/assets/card.svg";
import checkShield from "@/feature/byo/assets/checkShield.svg";
import wallet from "@/feature/byo/assets/wallet.svg";

import { FromCalculation } from "./form_calculation";


const FeeCalculation = () => {
  return (
    <div
      id="FeeCalculation"
      className="md:bg-gradient-to-b from-[#FFD685] to-[#F8F8F8] flex"
    >
      <div className="flex md:mt-12 items-center md:bg-[#F8F8F8] md:mx-[105px] w-full flex-col-reverse md:flex-row-reverse  md:px-16 rounded-3xl md:gap-24 justify-center ">
        <FromCalculation />
        <div className="flex mt-10 items-center gap-10 md:gap-20  flex-col md:flex-row-reverse  ">
          <p
            dir="rtl"
            className=" md:hidden text-[22px] font-black font-IranYekan text-center"
          >
            مزایای استفاده از سرویس BYO
          </p>
          <div  className="flex flex-col gap-8">
            <div className=" flex flex-row-reverse  items-center gap-6">
             <Image src={checkShield as StaticImport} alt="checkShield" />
              <p
                dir="rtl"
                className="  font-IranYekan text-xs  font-extrabold w-[151px] text-center text-[#564063] "
              >
                پرداخت کارفرما به حساب معتبر شرکت WINaTALENT و دریافت اینوویس
                رسمی
              </p>
            </div>
            <div className=" flex flex-row-reverse  items-center gap-6">
           <Image src={wallet as StaticImport}  alt="wallet" />
              <p
                dir="rtl"
                className="font-IranYekan text-xs font-extrabold w-[151px] text-center text-[#564063] "
              >
                پایدار و بدون ریسک (ارائه سرویس BYO از ۱۳۹۷)
              </p>
            </div>
            <div className=" flex flex-row-reverse  items-center gap-6">
              <Image src={card as StaticImport}  alt="card" />
              <p
                dir="rtl"
                className="font-IranYekan text-xs font-extrabold w-[151px] text-center text-[#564063] "
              >
                پشتیبانی و آموزش سرویس برای شما و کارفرمای شما در ایمیل یا جلسه
              </p>
            </div>
          </div>
          <div className="relative hidden md:block">
            <p
              className="
            font-IranYekan 
            font-extrabold 
            text-[13px] 
            text-[#555555] 
            absolute 
            top-20 
            w-28 
            right-7 
            text-center "
            >
              مزایای استفاده از سرویس BYO
            </p>
           
           <Image src={bigTitle as StaticImport} alt="checkShield" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeCalculation;
