export default function ColoredNumber({
  number,
  colored = true,
  percent = false,
}: {
  number: number;
  colored?: boolean;
  percent?: boolean;
}) {
  const isNegative = Number(number) < 0;
  const shouldColor = colored && Number(number) !== 0;
  return (
    <span
      className={`${shouldColor ? (isNegative ? "text-[#8B0000] dark:text-[#ca5a5a]" : "text-[#006400] dark:text-[#67c967]") : ""}`}
    >
      {number} {percent && "%"}
    </span>
  );
}
