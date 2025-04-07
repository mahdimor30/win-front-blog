"use client";

import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { usePrice } from "@/hooks/use-price";

import { ResultEuro } from "../result_euro";
import { WaletElement } from "../walet";

const FromCalculation = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const { data } = usePrice();

  const date_time =
    data &&
    new Date(data.updated_at).toLocaleString("fa-IR").split(",").reverse();

  const calculate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value;
    if (Number.isNaN(Number(number))) {
      setError("Enter Valid Number");
    } else {
      setError("");
      setAmount(number);
    }
  };

  if (data) {
    return (
      <div
        dir="rtl"
        className="mb-10 mt-[50px] w-[310px] rounded-3xl bg-gradient-to-b from-[#03DAC5] to-[#F8F8F8] p-[2px] md:mb-0 md:w-[450px] md:from-[#FFD685]"
      >
        <div className="back flex h-full w-full flex-col gap-4 rounded-3xl bg-[#F8F8F8] p-4 md:px-5 md:py-10">
          <div
            dir="rtl"
            className={`font-IranYekan flex h-10 w-[270px] items-center justify-center rounded-lg border border-[#777777] bg-white px-4 outline-none md:w-full md:gap-8`}
          >
            <Input
              className="!focus:outline-none w-full !border-none !outline-none placeholder:text-[#77777780] focus-visible:ring-0"
              value={amount}
              onChange={(e) => {
                calculate(e);
              }}
              placeholder="مبلغ پرداختی کارفرمای شما (یورو)"
            />
            {Number(amount) > 0 ? (
              <>
                <span>یورو</span>
              </>
            ) : (
              ""
            )}
          </div>
          {error && (
            <p dir="ltr" className="text-red-500">
              {" "}
              {error} !!
            </p>
          )}

          <div
            dir="rtl"
            className="font-IranYekan flex flex-col text-lg font-normal text-[#777777]"
          >
            <p className="flex items-center justify-between text-base font-normal md:text-lg">
              {" "}
              <span> کارمزد خدمات پلتفرم</span>
              <span className="flex items-center gap-4">
                <span>۵٪</span>
                <span className="text-2xl font-light tracking-tighter">--</span>
              </span>{" "}
            </p>
            <p className="text-xs">(حساب واسطه، مدیریت پروژه، پرداخت معتبر)</p>
          </div>
          <Separator />
          <WaletElement amount={amount} />
          <div>
            <p className="text-center text-xs font-bold leading-[2px] text-[#555555]">
              درخواست برداشت
            </p>
            <div className="flex flex-col rounded-[10px] bg-[#EEEEEE] px-6 py-4">
              <p className="flex items-center justify-between text-[#777777]">
                {" "}
                <span> کارمزد تبدیل ارز </span>
                <span className="flex items-center gap-4">
                  <span>1 تا ۲٪</span>
                  <span className="text-2xl font-light tracking-tighter">
                    --
                  </span>
                </span>{" "}
              </p>
              <Separator className="my-3 h-[0.5px]" />
              <ResultEuro amount={amount} price={data.price} />
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-IranYekan text-start text-xs font-bold text-[#777777]">
              <span>زمان آخرین آپدیت</span>
              <span className="mr-2 inline-flex flex-row-reverse gap-2">
                {date_time?.map((item: string, index: number) => (
                  <span key={item}>
                    {item}
                    {index === date_time.length - 1 && ","}
                  </span>
                ))}
              </span>
            </p>
            <p
              dir="rtl"
              className="font-IranYekan mt-2 text-start text-xs font-bold text-[#777777]"
            >
              <span>نرخ یورو:</span>

              <span className="mr-2 inline-flex gap-2">{data?.price}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="mb-10 mt-[50px] w-[310px] rounded-3xl bg-gradient-to-b from-[#03DAC5] to-[#F8F8F8] p-[2px] md:mb-0 md:w-auto md:from-[#FFD685]">
      <div className="back flex h-full w-full flex-col gap-4 rounded-3xl bg-[#F8F8F8] p-5 md:p-10">
        <Skeleton className="h-11 w-[350px]" />
        <Skeleton className="h-11 w-[350px]" />
        <Skeleton className="h-11 w-[350px]" />
        <Skeleton className="h-11 w-[350px]" />
        <Skeleton className="h-11 w-[350px]" />
      </div>
    </div>
  );
};

export default FromCalculation;
