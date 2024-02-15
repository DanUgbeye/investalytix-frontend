import performances from "@/mock/performances";

export default function PerformanceTable({
  highlight = false,
}: {
  highlight?: boolean;
}) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Country
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Last
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Previous
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Reference
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm text-[#212529]">
            Unit
          </th>
        </tr>
      </thead>
      <tbody>
        {performances.map((performance, index) => (
          <tr key={performance.country.replaceAll(" ", "-")}>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
              {performance.country}
            </td>
            <td
              className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
              style={{
                backgroundColor: highlight
                  ? `rgba(72,218,111,${(index + 1) / (1 * performances.length)})`
                  : "transparent",
              }}
            >
              {performance.last}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {performance.previous}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {performance.reference}
            </td>
            <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {performance.unit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
