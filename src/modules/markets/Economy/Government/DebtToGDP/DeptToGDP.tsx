export default function DeptToGDP() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="border-b bg-[#F5F5F5] px-2 py-3 text-sm text-[#212529] dark:bg-transparent dark:text-white">
        United States Gross Federal Debt to GDP
      </div>
      <p className="p-4 text-sm text-[#212529] dark:text-white">
        Generally, Government debt as a percent of GDP is used by investors to
        measure a country&apos;s ability to make future payments on its debt,
        thus affecting the country&apos;s borrowing costs and government bond
        yields.
      </p>

      <table className="w-full border-t text-sm">
        <thead>
          <tr className="border-b text-[#212529] dark:text-white">
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
          <tr className="text-[#212529] dark:text-white">
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
