import { creditRating } from "@/mock/creditRatings";

export default function CreditDescTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-[#212529] white-text">
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            TE
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            S&P
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Moody&apos;s
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            DBRS
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-center text-sm dark:bg-transparent">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {creditRating.map((rating, index) => (
          <tr key={index}>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333] white-text">
              {rating.TE}
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
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-center text-sm text-[#212529] white-text">
              {rating.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
