export default function MarketHeading({
  label,
  id,
}: {
  label: string;
  id?: string;
}) {
  return (
    <header id={id} className="pb-5">
      <h2 className="white-text text-2xl font-extrabold capitalize">
        {label.toLowerCase()}
      </h2>
    </header>
  );
}
