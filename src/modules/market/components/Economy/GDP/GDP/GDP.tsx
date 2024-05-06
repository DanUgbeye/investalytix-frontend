export default function GDP() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="white-text border-b bg-[#F5F5F5] px-2 py-3 text-sm text-[#212529] dark:bg-transparent">
        United States GDP
      </div>
      <p className="white-text p-4 text-sm text-[#212529]">
        The gross domestic product (GDP) measures of national income and output
        for a given country&apos;s economy. The gross domestic product (GDP) is
        equal to the total expenditures for all final goods and services
        produced within the country in a stipulated period of time.
      </p>

      <table className="w-full border-t text-sm">
        <thead>
          <tr className="white-text border-b text-[#212529]">
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
          <tr className="white-text text-[#212529]">
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
