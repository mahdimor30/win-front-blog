import Link from "next/link";

import ButtonByo from "./ui/button";

const WIWin = () => {
  return (
    <div className="flex flex-col items-center bg-[#93B5BF] px-5 md:px-0">
      <p
        dir="rtl"
        className="font-IranYekan mt-10 text-justify text-lg font-bold text-[#555555] md:w-[800px] md:text-center"
      >
        WINaTALENT پلتفرم موقعیت‌های کاری بین‌المللی است که برترین تلنت‌های حوزه
        IT را به موقعیت‌های کاری بین‌المللی وصل می‌کند. شما علاوه بر پیدا کردن
        پوزیشن‌های بین‌المللی در WINaTALENT، به کمک سرویس BYO ما می‌توانید درآمد
        ارزی خود را نقد کرده و دریافت کنید.
      </p>

      <ButtonByo className="md:mb-5">
        <Link href={"https://winatalent.com/auth/freelancer"}>
          کارفرمایتان را دعوت کنید
        </Link>
      </ButtonByo>
    </div>
  );
};

export default WIWin;
