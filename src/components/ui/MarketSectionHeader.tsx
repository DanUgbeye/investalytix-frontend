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
      className="pb-10"
    >
      <h2 className="white-text text-3xl font-extrabold !capitalize">
        {label.toLowerCase()}
      </h2>
    </header>
  );
}
