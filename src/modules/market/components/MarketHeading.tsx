export default function MarketHeading({
  label,
  id,
}: {
  label: string;
  id?: string;
}) {
  return (
    <header id={id} className="border-b-black/8 border-b pb-5 dark:border-b dark:border-b-main-gray-200/40">
      <h2 className="white-text text-2xl font-extrabold capitalize">
        {label.toLowerCase()}
      </h2>
    </header>
  );
}
