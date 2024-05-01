export default function Futures({
  isFairValue = false,
}: {
  isFairValue?: boolean;
}) {
  return (
    <div className="mt-8">
      <p className="white-text mb-4 font-bold uppercase  text-[#2F3A48]">
        {isFairValue ? "FAIR VALUE FUTURES (-27.48)" : "FUTURES"}
      </p>

      <table className="w-full table-fixed">
        <thead>
          <tr className="">
            <th className="border border-[#E1E6EF] dark:border-white/30 bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7]  dark:bg-white/10">
              {isFairValue ? "FV CLOSE" : "IND CLOSE"}
            </th>
            <th className="border border-[#E1E6EF] dark:border-white/30 bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7]  dark:bg-white/10">
              FUTURE
            </th>
            <th className="border border-[#E1E6EF] dark:border-white/30 bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7]  dark:bg-white/10">
              {isFairValue ? "IML OPEN" : "CHANGE"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-auto">
            <td className="white-text border border-[#E1E6EF] dark:border-white/30 p-3 text-center text-sm font-bold  text-[#636363]">
              37,656.52
            </td>
            <td className="white-text border border-[#E1E6EF] dark:border-white/30 p-3 text-center text-sm font-bold  text-[#636363]">
              37,945
            </td>
            <td className="white-text border border-[#E1E6EF] dark:border-white/30 p-3 text-center text-sm font-bold  text-[#636363]">
              -61
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
