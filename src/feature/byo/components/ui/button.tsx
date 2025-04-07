import { Button } from "@/components/button";
import { type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ButtonByo({
  className,
  children,
  asChild = true,
  ...buttonProps
}: ButtonProps) {
  return (
    <Button
      className={cn(
        "mb-10 mt-12 bg-[#28ABA7] px-12 py-8 text-lg font-extrabold hover:bg-white hover:text-[#28ABA7] md:mb-0",
        className,
      )}
      {...buttonProps}
      asChild={asChild}
    >
      {children}
    </Button>
  );
}
