import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isPositive?: boolean;
}

export default function ColoredText(props: Props) {
  const { className, isPositive, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(
        {
          " text-main-green-light dark:text-main-green-dark ":
            isPositive === true,
          " text-main-red-light dark:text-main-red-dark ": isPositive === false,
        },
        className
      )}
    />
  );
}
