import Image from "next/image";

import circle from "@/feature/payment-tr/assets/circle.svg";
import logo from "@/feature/payment-tr/assets/logo.svg";

const Header = async () => {
  return (
    <header>
      <div className="flex items-center justify-center mt-[70px]">
        <Image
          alt="logo"
          className="max-w-[260px] max-h-[120px] min-w-[170px] min-h-[80px]"
          src={logo}
        />
      </div>

      <div className="flex justify-around xl:flex-row-reverse flex-col-reverse xl:justify-center w-full">
        <div className="flex flex-col items-end gap-9 bg-white max-w-[380px] min-w-[380px] h-[258px] mt-[70px] rounded-[20px] shadow-[1px_1px_15px_3px_rgba(0,0,0,0.07)] xl:block hidden">
          <div
            dir="rtl"
            className="flex flex-row-reverse justify-end mr-9 mt-6"
          >
            <h1 className="text-[22px] font-bold mr-[10px] text-[#555555]">
              سیاست ها و قوانین سایت{" "}
            </h1>
            <Image alt="circle" src={circle} />
          </div>

          <div
            dir="rtl"
            className="flex flex-row-reverse justify-end mr-[38px] mt-6"
          >
            <h1 className="text-[22px] font-bold mr-[10px] text-[#555555]">
              نحوه ی انجام کار و پرداخت ها
            </h1>
            <Image alt="circle" src={circle} />
          </div>

          <div
            dir="rtl"
            className="flex flex-row-reverse justify-end mr-[38px] mt-6"
          >
            <h1 className="text-[22px] font-bold mr-[10px] text-[#555555]">
              نرخ ارز
            </h1>
            <Image alt="circle" src={circle} />
          </div>
        </div>

        <div dir="rtl" className="xl:w-[60%] w-full xl:mt-[100px] mt-0 p-5">
          <h1 className="text-[24px] font-[900] text-[#03dac5] text-start">
            شرایط و قوانین استفاده از سرویس WINaTALENT{" "}
          </h1>
          <p className="font-normal text-[18px] text-[#777777] text-justify">
            کاربر گرامی لطفاً موارد زیر را جهت استفاده بهینه از خدمات و
            برنامه‌‏های WINaTALENT و قوانین پرداخت به دقت ملاحظه فرمایید. ورود
            کاربران به وب‏‌سایت WINaTALENT هنگام استفاده از پروفایل شخصی ،
            مشارکت در پروژه ها ، انجام پروژه ها وارتباط با کارفرماها به معنای
            آگاه بودن و پذیرفتن شرایط و قوانین و همچنین نحوه استفاده از
            سرویس‌‏ها و خدمات WINaTALENT است . لازم به ذکر است شرایط و قوانین
            مندرج ، جایگزین کلیه توافق‏‌های قبلی محسوب می‏‌شود .
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
