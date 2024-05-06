const bonds = [
  {
    Bonds: "US 10Y",
    Yield: {
      "%": "4.10",
      Day: "0.032%",
      Month: "0.142%",
      Year: "0.723%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "UK 10Y",
    Yield: {
      "%": "1.85",
      Day: "-0.015%",
      Month: "-0.092%",
      Year: "-0.421%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Germany 10Y",
    Yield: {
      "%": "0.10",
      Day: "0.008%",
      Month: "0.025%",
      Year: "-0.053%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Japan 10Y",
    Yield: {
      "%": "0.15",
      Day: "0.002%",
      Month: "0.013%",
      Year: "0.084%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Canada 10Y",
    Yield: {
      "%": "1.75",
      Day: "0.012%",
      Month: "0.085%",
      Year: "0.362%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Australia 10Y",
    Yield: {
      "%": "2.20",
      Day: "0.025%",
      Month: "0.101%",
      Year: "0.482%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "France 10Y",
    Yield: {
      "%": "0.60",
      Day: "0.006%",
      Month: "0.035%",
      Year: "-0.196%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Italy 10Y",
    Yield: {
      "%": "1.50",
      Day: "0.016%",
      Month: "0.073%",
      Year: "0.346%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "Spain 10Y",
    Yield: {
      "%": "0.50",
      Day: "0.003%",
      Month: "0.021%",
      Year: "-0.143%",
    },
    Date: "Jan/17",
  },
  {
    Bonds: "China 10Y",
    Yield: {
      "%": "2.95",
      Day: "0.028%",
      Month: "0.122%",
      Year: "0.602%",
    },
    Date: "Jan/17",
  },
];

export default function BondsTable() {
  return (
    <table className="w-full border border-[#DEE2E6]">
      <thead>
        <tr className="white-text text-[#212529]">
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Bonds
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Yield
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent"></th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Day
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Month
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Year
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Date
          </th>
        </tr>
      </thead>
      <tbody>
        {bonds.map((bond, index) => (
          <tr key={bond.Bonds.replaceAll(" ", "-")}>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
              {bond.Bonds}
            </td>
            <td
              className={`white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
            >
              {bond.Yield["%"]}
            </td>
            <td
              className={`white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
            ></td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {bond.Yield.Day}
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {bond.Yield.Month}
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {bond.Yield.Year}
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {bond.Date}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
