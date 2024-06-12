import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface MarketSectionHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  label: string;
  id?: string;
}

export default function MarketSectionHeader({
  id = undefined,
  label,
  className = "",
  ...props
}: MarketSectionHeaderProps) {
  return (
    <header id={id} {...props} className={twMerge(`pb-10 text-3xl font-extrabold capitalize ${className}`)}>
      <h2 className="white-text">
        {label.toLowerCase()}
      </h2>
    </header>
  );
}
