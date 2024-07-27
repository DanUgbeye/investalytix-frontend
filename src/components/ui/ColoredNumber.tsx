import { twMerge } from "tailwind-merge";

export default function ColoredNumber({
  number,
  colored = true,
  percent = false,
  className = "",
  decimals,
}: {
  number?: number | null;
  colored?: boolean;
  percent?: boolean;
  className?: HTMLElement["className"];
  decimals?: number;
}) {
  if (Number.isNaN(Number(number)) || number === null) {
    return <span>-</span>;
  }

  const isNegative = Number(number) < 0;
  const shouldColor = colored && Number(number) !== 0;
  return (
    <span
      className={twMerge(
        `${shouldColor ? (isNegative ? "text-[#8B0000] dark:text-[#ca5a5a]" : "text-[#006400] dark:text-[#67c967]") : ""}`,
        className
      )}
    >
      {Number.isNaN(decimals) ? number : number?.toFixed(decimals)}
      {percent && "%"}
    </span>
  );
}
