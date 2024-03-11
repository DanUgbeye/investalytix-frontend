import Image from "next/image";
import Panel from "../../Panel";
import { FiPlus } from "react-icons/fi";

const overview = [
  { agency: "DBRS", rating: "AAA", outlook: "Negative", date: "Nov 10, 2023" },
  { agency: "Moody's", rating: "Aaa", outlook: "Stable", date: "Dec 5, 2023" },
  { agency: "S&P", rating: "AA+", outlook: "Positive", date: "Jan 20, 2024" },
  { agency: "Fitch", rating: "AA", outlook: "Negative", date: "Feb 15, 2024" },
  { agency: "DBRS", rating: "AAA", outlook: "Stable", date: "Mar 8, 2024" },
  {
    agency: "Moody's",
    rating: "Aa1",
    outlook: "Negative",
    date: "Apr 12, 2024",
  },
  { agency: "S&P", rating: "A+", outlook: "Stable", date: "May 5, 2024" },
  { agency: "Fitch", rating: "A", outlook: "Positive", date: "Jun 18, 2024" },
  { agency: "DBRS", rating: "AAA", outlook: "Negative", date: "Jul 22, 2024" },
  { agency: "Moody's", rating: "Aa2", outlook: "Stable", date: "Aug 30, 2024" },
  { agency: "S&P", rating: "A-", outlook: "Negative", date: "Sep 5, 2024" },
  {
    agency: "Fitch",
    rating: "BBB+",
    outlook: "Positive",
    date: "Oct 10, 2024",
  },
  { agency: "DBRS", rating: "AAA", outlook: "Stable", date: "Nov 15, 2024" },
  {
    agency: "Moody's",
    rating: "Aa3",
    outlook: "Negative",
    date: "Dec 20, 2024",
  },
  { agency: "S&P", rating: "BBB", outlook: "Stable", date: "Jan 7, 2025" },
  {
    agency: "Fitch",
    rating: "BBB-",
    outlook: "Positive",
    date: "Feb 12, 2025",
  },
  { agency: "DBRS", rating: "AAA", outlook: "Negative", date: "Mar 18, 2025" },
  { agency: "Moody's", rating: "A1", outlook: "Stable", date: "Apr 25, 2025" },
  { agency: "S&P", rating: "BB+", outlook: "Negative", date: "May 30, 2025" },
  { agency: "Fitch", rating: "A+", outlook: "Positive", date: "Jun 5, 2025" },
];

export default function Summary() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363]">
          Standard & Poor&apos;s credit rating for the United States stands at AA+
          with stable outlook. Moody&apos;s credit rating for the United States was
          last set at Aaa with negative outlook. Fitch&apos;s credit rating for the
          United States was last reported at AA+ with stable outlook. DBRS&apos;
          credit rating for the United States was last reported at AAA with
          stable outlook.
          <br />
          <br />
          In general, a credit rating is used by sovereign wealth funds, pension
          funds and other investors to gauge the credit worthiness of the United
          States thus having a big impact on the country&apos;s borrowing costs. This
          page includes the government debt credit rating for the United States
          as reported by major credit rating agencies.
        </p>

        <div className="h-6 w-full"></div>
        <RelatedTable />
      </div>
      <div className="">
        <div className="mt-8 flex flex-col gap-1">
          <Panel heading={"Prices"} defaultOpen />
          <Panel heading={"Markets"} />
          <Panel heading={"Labour"} />
          <Panel heading={"GDP"} />
          <Panel heading={"Health"} />
          <Panel heading={"Money"} />
          <Panel heading={"Trade"} />
          <Panel heading={"Government"} />
          <Panel heading={"Business"} />
          <Panel heading={"Consumer"} />
          <Panel heading={"Housing"} />
          <Panel heading={"Taxes"} />
          <Panel heading={"Climate"} />
        </div>
      </div>
    </div>
  );
}

function RelatedTable() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Agency
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Rating
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Outlook
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {overview.map((entry, index) => (
              <tr key={entry.agency.replaceAll(" ", "-") + index}>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
                  {entry.agency}
                </td>
                <td
                  className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
                >
                  {entry.rating}
                </td>

                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.outlook}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                  {entry.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
