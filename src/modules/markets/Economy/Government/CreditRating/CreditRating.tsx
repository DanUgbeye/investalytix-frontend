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

export default function CreditRating() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="overflow-auto">
        <table className="w-full">
          <thead>
            <tr className="text-[#212529] dark:text-white">
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Agency
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Rating
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Outlook
              </th>
              <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {overview.map((entry, index) => (
              <tr key={entry.agency.replaceAll(" ", "-") + index}>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333] dark:text-white">
                  {entry.agency}
                </td>
                <td
                  className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white`}
                >
                  {entry.rating}
                </td>

                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white">
                  {entry.outlook}
                </td>
                <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white">
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
