export default function Sentiment() {
  return (
    <div className="border border-[#DEE2E6]">
      <div className="white-text border-b bg-[#F5F5F5] px-2 py-3 text-sm text-[#212529] dark:bg-transparent">
        United States Michigan Consumer Sentiment
      </div>
      <p className="white-text p-4 text-sm text-[#212529]">
        The Index of Consumer Expectations focuses on three areas: how consumers
        view prospects for their own financial situation, how they view
        prospects for the general economy over the near term, and their view of
        prospects for the economy over the long term. Each monthly survey
        contains approximately 50 core questions, each of which tracks a
        different aspect of consumer attitudes and expectations. The samples for
        the Surveys of Consumers are statistically designed to be representative
        of all American households, excluding those in Alaska and Hawaii. Each
        month, a minimum of 500 interviews are conducted by telephone.
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
