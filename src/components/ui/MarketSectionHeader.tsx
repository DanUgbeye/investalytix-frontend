type MarketSectionHeaderProps = {
  label: string;
  id?: string;
};
export default function MarketSectionHeader({
  id = undefined,
  label,
}: MarketSectionHeaderProps) {
  return (
    <header
      id={id}
      className="border-b border-b-black/8 pb-10 dark:border-b dark:border-b-white mb-5"
    >
      <h2 className="white-text text-3xl font-extrabold">
        {label}
      </h2>
    </header>
  );
}
