"use client";

import dynamic from "next/dynamic";

import { FeeCalculation } from "../components/calculation";
import Faq from "../components/faq";
import HeroByo from "../components/hero-byo";
import WayOfDoingWork from "../components/way-of-doing-work";
import WIWin from "../components/wi-win";
const FreelancerTestimonial = dynamic(
  () => import("../components/freelancer-testimonial"),
  {
    ssr: false,
  },
);

export default function Byo() {
  return (
    <>
      <div className="">
        <HeroByo />
        <FeeCalculation />
        <WayOfDoingWork />
        <FreelancerTestimonial />
        <Faq />
        <WIWin />
      </div>
    </>
  );
}
