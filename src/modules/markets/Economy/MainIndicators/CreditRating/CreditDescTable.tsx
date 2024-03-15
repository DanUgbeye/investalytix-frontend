import { creditRating } from "@/mock/creditRatings";

export default function CreditDescTable() {
  return (
    <table className="w-full">
      <thead>
        <tr className="text-[#212529] dark:text-white">
          <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">TE</th>
          <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">S&P</th>
          <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">
            Moody&apos;s
          </th>
          <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">DBRS</th>
          <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-center text-sm">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {creditRating.map((rating, index) => (
          <tr key={index}>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333] dark:text-white">
              {rating.TE}
            </td>
            <td
              className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white`}
            >
              {rating["S&P"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white">
              {rating["Moody's"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529] dark:text-white">
              {rating["DBRS"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-center text-sm text-[#212529] dark:text-white">
              {rating.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
