import { creditRating } from "@/mock/creditRatings";

export default function CreditDescTable() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            TE
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            S&P
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Moody&apos;s
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            DBRS
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-center text-sm text-[#212529]">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        {creditRating.map((rating, index) => (
          <tr key={index}>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
              {rating.TE}
            </td>
            <td
              className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
            >
              {rating["S&P"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {rating["Moody's"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {rating["DBRS"]}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-center text-sm text-[#212529]">
              {rating.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
