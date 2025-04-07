import { type FC } from "react";

import { cn } from "@/lib/utils";

const QuotationMark: FC<{ className: string }> = ({ className }) => (
  <span
    className={cn(
      className,

      "font-grapenuts text-8xl text-[#FFC857] md:text-9xl md:leading-[128px]",
    )}
  >
    &ldquo;
  </span>
);

export default QuotationMark;
