import quotes from "@/mock/quotes";

type Field = {
  label: string;
  key: keyof (typeof quotes)[number];
};

const defaultFields: Field[] = [
  {
    label: "Symbol",
    key: "symbol",
  },
  {
    label: "last",
    key: "price",
  },
  {
    label: "chg",
    key: "change",
  },
  {
    label: "chg%",
    key: "changesPercentage",
  },
];

export default function Quotes({
  fields = defaultFields,
}: {
  fields?: Field[];
}) {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="text-white">
          <th className="bg-[#020224] p-2 text-left text-sm font-extrabold uppercase dark:border-b dark:bg-transparent">
            {fields[0].label}
          </th>
          {fields.slice(1).map((field) => (
            <th
              key={field.label}
              className="bg-[#020224] p-2 text-left text-sm font-extrabold uppercase dark:border-b dark:bg-transparent"
            >
              {field.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {quotes.map((quote) => (
          <tr
            key={quote.symbol}
            className="text-black odd:bg-[#F9F9F9] dark:text-[#F8F7F7] dark:odd:bg-transparent"
          >
            <td className="p-2 text-left text-sm font-bold uppercase">
              {quote[fields[0].key]}
            </td>
            {fields.slice(1).map((field) => (
              <td key={field.key} className="p-2 text-left text-sm font-bold">
                {quote[field.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
