export default function InterestRate() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="border-b bg-[#F5F5F5] px-2 py-3 text-sm text-[#212529] dark:bg-transparent white-text">
        United States Fed Funds Interest Rate
      </div>
      <p className="p-4 text-sm text-[#212529] white-text">
        In the United States, the authority to set interest rates is divided
        between the Board of Governors of the Federal Reserve (Board) and the
        Federal Open Market Committee (FOMC). The Board decides on changes in
        discount rates after recommendations submitted by one or more of the
        regional Federal Reserve Banks. The FOMC decides on open market
        operations, including the desired levels of central bank money or the
        desired federal funds market rate.
      </p>

      <table className="w-full border-t text-sm">
        <thead>
          <tr className="border-b text-[#212529] white-text">
            <th className="bg-[#F5F5F5] py-3 pl-4 pr-2 text-left text-sm dark:bg-transparent">
              Actual
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Previous
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Highest
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Lowest
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Dates
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Unit
            </th>
            <th className="bg-[#F5F5F5] py-3 pl-2 pr-4 text-left text-sm dark:bg-transparent">
              Frequency
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[#212529] white-text">
            <td className="py-3 pl-4 pr-2 text-left text-sm">4.10</td>
            <td className="px-2 py-3 text-left text-sm">4.07</td>
            <td className="px-2 py-3 text-left text-sm">15.82</td>
            <td className="px-2 py-3 text-left text-sm">0.32</td>
            <td className="px-2 py-3 text-left text-sm">1912 - 2024</td>
            <td className="py-3 pl-2 pr-4 text-left text-sm">percent</td>
            <td className="px-2 py-3 text-left text-sm">Daily</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
