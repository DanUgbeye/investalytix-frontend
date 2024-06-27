import { cn } from "@/lib/utils";
import { HTMLAttributes, useMemo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isPositive?: boolean | (() => boolean | undefined);
}

export default function ColoredText(props: Props) {
  const { className, isPositive, ...rest } = props;

  const positive = useMemo(() => {
    if (isPositive === undefined) return undefined;

    if (typeof isPositive === "function") {
      return isPositive();
    }

    return isPositive;
  }, [isPositive]);

  return (
    <div
      {...rest}
      className={cn(
        {
          " text-main-green-light dark:text-main-green-dark ":
            positive === true,
          " text-main-red-light dark:text-main-red-dark ": positive === false,
        },
        className
      )}
    />
  );
}
