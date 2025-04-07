import { type StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

import cash_payment from "@/feature/byo/assets/cash-payment.svg";
import mobileY from "@/feature/byo/assets/mobileY.svg";
import mountain from "@/feature/byo/assets/mountain.svg";
import payment from "@/feature/byo/assets/payment.svg";
import sign_up from "@/feature/byo/assets/sign_up.svg";

const data = [
  {
    iconColor: {
      bgColor: "bg-[#4D7C8A]",
      textColor: "text-[#EEEEEE]",
    },
    image: <Image src={sign_up as StaticImport} className="h-[220px]" alt='sign-up' />,
    number: "01",
    text: `در WINaTALENT به عنوان freelancer ثبت نام کنید و با استفاده از لینک دعوت خود، کارفرمای خود را به پلتفرم دعوت کنید.`,
    isReverse: true,
  },
  {
    iconColor: {
      bgColor: "bg-[#FFC857]",
      textColor: "text-[#EEEEEE]",
    },
    image: <Image src={mobileY as StaticImport} className="h-[220px]"   alt="mobileY" />,
    number: "02",
    text: `کافرمای شما، چارچوب پروژه (offer) را تنظیم کرده و برای شما ارسال می‌کند. همزمان با ارسال offer، کارفرمای شما مبلغ offer را به حساب واسطه WINaTALENT پرداخت می‌کند.`,
    
  },
  {
    iconColor: {
      bgColor: "bg-[#564063]",
      textColor: "text-[#EEEEEE]",
    },
    image: <Image src={mountain as StaticImport} alt="mountain" className="h-[220px]"  />,
    number: "03",
    text: `پس از اتمام هر بخش از کار، کارفرما مبلغ آن بخش را آزاد می‌کند که پس از کسر کارمزد پلتفرم، به کیف پول شما منتقل می‌شود.`,
    isReverse: true,
  },
  {
    iconColor: {
      bgColor: "bg-[#F39551]",
      textColor: "text-[#EEEEEE]",
    },
    image: <Image alt="payment" src={payment as StaticImport} className="h-[220px]" />,
    number: "04",
    text: `در زمان دلخواه خود، می‌تونید درخواست برداشت موجودی ارزی کیف پولتان را ثبت کنید.`,
   
  },
  {
    iconColor: {
      bgColor: "bg-[#02DAC5]",
      textColor: "text-[#EEEEEE]",
    },
    image: <Image alt="cash_payment" src={cash_payment as StaticImport} className="h-[220px]" />,
    number: "05",
    text: `مبلغ ریالی درخواست شما طی ۵ روز کاری به حساب شما منتقل می‌شود.`,
    isReverse: true,
  },
];

export default data;
