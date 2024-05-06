import { mockCreditRatingData } from "@/mock/creditRatings";

export default function CreditRatingTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="white-text text-[#212529]">
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
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
              {rating.Country}
            </td>
            <td
              className={`white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
            >
              {rating["S&P"]}
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {rating["Moody's"]}
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {rating["DBRS"]}
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {rating["TE"]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
