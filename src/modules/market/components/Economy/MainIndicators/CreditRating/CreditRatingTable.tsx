import { mockCreditRatingData } from "@/mock/creditRatings";

export default function CreditRatingTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-[#212529] white-text">
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent"></th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            S&P
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Moody&apos;s
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            DBRS
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            TE
          </th>
        </tr>
      </thead>
      <tbody>
        {mockCreditRatingData.map((rating, index) => (
          <tr key={rating.Country.replaceAll(" ", "-")}>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333] white-text">
              {rating.Country}
            </td>
            <td
              className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] white-text`}
            >
              {rating["S&P"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] white-text">
              {rating["Moody's"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] white-text">
              {rating["DBRS"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] white-text">
              {rating["TE"]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
