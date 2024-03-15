import { FiPlus } from "react-icons/fi";

const related = [
    {
      related: "United States GDP Growth Rate",
      last: "4.90",
      previous: "2.10",
      unit: "percent",
      reference: "Sep 2023",
    },
    {
      related: "United States Inflation Rate",
      last: "3.40",
      previous: "3.10",
      unit: "percent",
      reference: "Dec 2023",
    },
    {
      related: "United States Fed Funds Interest Rate",
      last: "5.50",
      previous: "5.50",
      unit: "percent",
      reference: "Dec 2023",
    },
    {
      related: "United States Unemployment Rate",
      last: "3.70",
      previous: "3.70",
      unit: "percent",
      reference: "Dec 2023",
    },
  ];
  

export default function RelatedTable() {
    return (
      <div className="border border-[#DEE2E6]">
        <table className="w-full">
          <thead>
            <tr className="text-[#212529] dark:text-white">
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Related
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Last
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Previous
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Unit
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Reference
              </th>
            </tr>
          </thead>
          <tbody>
            {related.map((entry, index) => (
              <tr key={entry.related.replaceAll(" ", "-")}>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333] dark:text-white">
                  {entry.related}
                </td>
                <td
                  className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white`}
                >
                  {entry.last}
                </td>
  
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white">
                  {entry.previous}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white">
                  {entry.unit}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white">
                  {entry.reference}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-[#F5F5F5] px-2 py-3 dark:border-t dark:border-t-[#f5f5f5] dark:bg-transparent">
          <button className="border border-[#CCCCCC] bg-white p-2 dark:bg-transparent">
            <FiPlus className="dark:text-white" />
          </button>
        </div>
      </div>
    );
  }