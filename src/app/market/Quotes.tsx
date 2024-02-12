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
        <tr>
          <th className="bg-[#1D1D1D] p-2 text-left text-sm font-extrabold uppercase text-white">
            {fields[0].label}
          </th>
          {fields.slice(1).map((field) => (
            <th
              key={field.label}
              className="bg-[#1D1D1D] p-2 text-right text-sm font-extrabold uppercase text-white"
            >
              {field.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr key={quote.symbol} className="odd:bg-[#F9F9F9]">
            <td className="p-2 text-left text-sm font-bold uppercase">
              {quote[fields[0].key]}
            </td>
            {fields.slice(1).map((field) => (
              <td
                key={field.key}
                className="p-2 text-right text-sm font-bold text-black"
              >
                {quote[field.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
