import ColoredNumber from "@/components/ui/ColoredNumber";
import performances from "@/mock/performances";

export default function PerformanceTable({
  highlight = false,
}: {
  highlight?: boolean;
}) {
  return (
    <table className="w-full">
      <thead>
        <tr className="white-text text-[#212529]">
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Country
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Last
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Previous
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Reference
          </th>
          <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
            Unit
          </th>
        </tr>
      </thead>
      <tbody>
        {performances.map((performance, index) => (
          <tr key={performance.country.replaceAll(" ", "-")}>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
              {performance.country}
            </td>
            <td
              className={`white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
              style={{
                backgroundColor: highlight
                  ? `rgba(72,218,111,${(index + 1) / (1 * performances.length)})`
                  : "transparent",
              }}
            >
              <ColoredNumber number={performance.last} />
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              <ColoredNumber number={performance.previous} />
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {performance.reference}
            </td>
            <td className="white-text border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
              {performance.unit}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
