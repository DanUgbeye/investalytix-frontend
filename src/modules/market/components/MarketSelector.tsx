import Link from "next/link";
import { twMerge } from "tailwind-merge";

type MarketSelectorProps = {
  className?: HTMLDivElement["className"];
  active?: MarketSelectorProps["selectors"][number]["label"];
  selectors: readonly {
    label: string;
    href: string;
  }[];
};

export default function MarketSelector({
  selectors,
  className = "",
  active,
}: MarketSelectorProps) {
  return (
    <div
      className={twMerge(
        `mx-auto flex w-fit items-center justify-center gap-2 rounded ${className}`
      )}
    >
      {selectors.map((selector, index) => (
        <Link
          key={selector.href}
          href={selector.href}
          className={`bg-hover-focus whitespace-nowrap rounded-full px-4 py-1 text-center text-sm capitalize ${
            active === selector.label ? "bg-primary-base text-white" : ""
          }`}
        >
          {selector.label.toLowerCase()}
        </Link>
      ))}
    </div>
  );
}
