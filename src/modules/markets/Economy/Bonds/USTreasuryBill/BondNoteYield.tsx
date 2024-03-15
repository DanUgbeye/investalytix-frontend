export default function BondNoteYield() {
    return (
      <div className="border border-[#DEE2E6]">
        <div className="bg-[#F5F5F5] dark:bg-transparent border-b px-2 py-3 text-sm text-[#212529] dark:text-white">
          US 10 Year Treasury Bond Note Yield
        </div>
        <p className="p-4 text-sm text-[#212529] dark:text-white">
          Generally, a government bond is issued by a national government and is
          denominated in the country`s own currency. Bonds issued by national
          governments in foreign currencies are normally referred to as sovereign
          bonds. The yield required by investors to loan funds to governments
          reflects inflation expectations and the likelihood that the debt will be
          repaid.
        </p>
  
        <table className="w-full text-sm border-t">
          <thead>
            <tr className="text-[#212529] dark:text-white border-b">
              <th className="bg-[#F5F5F5] dark:bg-transparent py-3 pl-4 pr-2 text-left text-sm">
                Actual
              </th>
              <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">
                Previous
              </th>
              <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">
                Highest
              </th>
              <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">Lowest</th>
              <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">Dates</th>
              <th className="bg-[#F5F5F5] dark:bg-transparent px-2 py-3 text-left text-sm">Unit</th>
              <th className="bg-[#F5F5F5] dark:bg-transparent py-3 pl-2 pr-4 text-left text-sm">
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