/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import "swiper/css";
import "swiper/css/navigation";

import { useQuery } from "@tanstack/react-query";
import { type CSSProperties, memo } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Skeleton } from "@/components/ui/skeleton";
import {
  type TypeTtestimonial,
  type UserTypeTtestimonial,
} from "@/feature/byo/types";
import { getRandomTailwindColor } from "@/feature/byo/utils/reandom-color";
import { get } from "@/lib/axios";
import { cn } from "@/lib/utils";

import ContentCardTestimonial from "./content-card-testimonial";

const userType: UserTypeTtestimonial = "freelancer";

const style: CSSProperties = {
  ["--swiper-theme-color" as any]: "#777777 !important",
  ["--swiper-navigation-size" as any]: "25px !important",
  ["--swiper-navigation-weight" as any]: "900 !important",
};

const FreelancerTestimonial = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["Testimonial"],
    queryFn: () =>
      get<TypeTtestimonial[]>(`content/testimonial?user_type=${userType}`),
    staleTime: Infinity,
    select(data) {
      const newArry = data.map((item) => {
        return { ...item, avatar_bg_color: getRandomTailwindColor() };
      });
      return newArry;
    },
  });

  if (isLoading && !data) {
    return (
      <div className="flex flex-col items-center gap-5 py-10">
        <div className="flex items-center justify-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
        <div>
          <Skeleton className="h-[300px] w-[300px]" />
        </div>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center py-16">
      <h4 className="text-xl font-extrabold text-[#222]">
        BYO نظرات مشتریان سرویس
      </h4>
      <Swiper
        modules={[Navigation]}
        className="m-0 w-screen py-4 md:max-w-[1200px] md:py-10"
        style={style}
        breakpoints={{
          0: {
            centeredSlides: true,
            slidesPerView: 1,
            spaceBetween: 1,
            // width: 300,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        centeredSlides
        initialSlide={data?.length ? data.length - 1 : 1}
        navigation
      >
        {Array.isArray(data) &&
          data?.map((item) => (
            <SwiperSlide key={cn("swiper_tes", item.id)}>
              {({ isActive }) => (
                <div
                  className={cn(
                    "mx-8 h-[480px] flex-1 transform flex-col items-center justify-between rounded text-center transition-all duration-700 md:mx-0 lg:mr-0 lg:h-[450px] lg:w-full",
                    isActive
                      ? "relative z-10"
                      : "opacity-40 md:scale-x-75 md:scale-y-[0.8]",
                  )}
                  style={{
                    border: "0.5px solid #777",
                    borderRadius: "4px",
                    boxShadow: "4px 4px 10px 0px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <ContentCardTestimonial
                    {...item}
                    avatar_bg_color={item.avatar_bg_color ?? ""}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default memo(FreelancerTestimonial);
