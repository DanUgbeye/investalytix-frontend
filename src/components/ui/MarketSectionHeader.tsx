type MarketSectionHeaderProps = {
  label: string;
};
export default function MarketSectionHeader({
  label,
}: MarketSectionHeaderProps) {
  return (
    <header className="border-b-[6px] border-b-[#1D1D1D] pb-10 dark:border-b-2 dark:border-b-white">
      <h2 className="white-text border-l-[6px] border-l-primary-base pl-5 text-3xl font-extrabold">
        {label}
      </h2>
    </header>
  );
}
