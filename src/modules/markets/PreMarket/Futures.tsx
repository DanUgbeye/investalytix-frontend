export default function Futures({
  isFairValue = false,
}: {
  isFairValue?: boolean;
}) {
  return (
    <div className="mt-8">
      <p className="mb-4 font-bold uppercase text-[#2F3A48] dark:text-white">
        {isFairValue ? "FAIR VALUE FUTURES (-27.48)" : "FUTURES"}
      </p>

      <table className="w-full table-fixed">
        <thead>
          <tr className="">
            <th className="border  border-[#E1E6EF] bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7] dark:bg-transparent dark:text-white">
              {isFairValue ? "FV CLOSE" : "IND CLOSE"}
            </th>
            <th className="border  border-[#E1E6EF] bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7] dark:bg-transparent dark:text-white">
              FUTURE
            </th>
            <th className="border  border-[#E1E6EF] bg-[#020224] p-3 text-center text-sm font-bold text-[#F8F7F7] dark:bg-transparent dark:text-white">
              {isFairValue ? "IML OPEN" : "CHANGE"}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="w-auto">
            <td className="border border-[#E1E6EF] p-3 text-center text-sm font-bold text-[#636363] dark:text-white">
              37,656.52
            </td>
            <td className="border border-[#E1E6EF] p-3 text-center text-sm font-bold text-[#636363] dark:text-white">
              37,945
            </td>
            <td className="border border-[#E1E6EF] p-3 text-center text-sm font-bold text-[#636363] dark:text-white">
              -61
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
