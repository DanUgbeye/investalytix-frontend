import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  classNames?: {
    heading?: string;
  };
}

export default function HeaderWithUnderline(props: Props) {
  const { className, classNames, children, ...rest } = props;

  return (
    <header {...rest} className={cn("relative w-full", className)}>
      <h3
        className={cn(
          " py-4 text-2xl font-bold text-black dark:text-main-gray-300 ",
          classNames?.heading
        )}
      >
        {children}
      </h3>

      <div className="absolute h-[2px] w-full bg-gradient-to-r from-[#FB8B1E] dark:from-primary-base/80 from-40% to-main-gray-300 to-40% dark:to-white/20" />
    </header>
  );
}
