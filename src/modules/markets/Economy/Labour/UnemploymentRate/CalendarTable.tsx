import { FiPlus } from "react-icons/fi";

const calendar = [
  {
    date: "",
    time: "",
    reference: "",
    actual: "",
    previous: "",
    consensus: "",
    teforecast: "",
  },
];

export default function CalendarTable() {
  return (
    <div className="border border-[#DEE2E6]">
      <table className="w-full">
        <thead>
          <tr className="text-[#212529] dark:text-white">
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Calendar
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              GMT
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Reference
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Actual
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Previous
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              Consensus
            </th>
            <th className="bg-[#F5F5F5] px-2 py-3 text-left text-sm dark:bg-transparent">
              TEForecast
            </th>
          </tr>
        </thead>
        <tbody>
          {calendar.map((entry, index) => (
            <tr key={entry.date.replaceAll(" ", "-")}>
              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm font-bold text-[#333333]">
                {entry.date}
              </td>
              <td
                className={`border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]`}
              >
                {entry.time}
              </td>

              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                {entry.reference}
              </td>
              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                {entry.actual}
              </td>
              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                {entry.previous}
              </td>
              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                {entry.consensus}
              </td>
              <td className="border-t border-t-[#DEE2E6] px-2 py-3 text-left text-sm text-[#212529]">
                {entry.teforecast}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bg-[#F5F5F5] px-2 py-3 dark:border-t dark:border-t-[#f5f5f5] dark:bg-transparent">
        <button className="border border-[#CCCCCC] bg-white p-2 dark:bg-transparent">
          <FiPlus className="dark:text-white" />
        </button>
      </div>
    </div>
  );
}
