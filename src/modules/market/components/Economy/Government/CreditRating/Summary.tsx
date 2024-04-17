import Panel from "../../Panel";
import CreditRating from "./CreditRating";

export default function Summary() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
      <div className="overflow-hidden">
        <p className="text-[#636363] dark:text-white">
          Standard & Poor&apos;s credit rating for the United States stands at
          AA+ with stable outlook. Moody&apos;s credit rating for the United
          States was last set at Aaa with negative outlook. Fitch&apos;s credit
          rating for the United States was last reported at AA+ with stable
          outlook. DBRS&apos; credit rating for the United States was last
          reported at AAA with stable outlook.
          <br />
          <br />
          In general, a credit rating is used by sovereign wealth funds, pension
          funds and other investors to gauge the credit worthiness of the United
          States thus having a big impact on the country&apos;s borrowing costs.
          This page includes the government debt credit rating for the United
          States as reported by major credit rating agencies.
        </p>

        <div className="h-6 w-full"></div>
        <CreditRating />
      </div>
      <div className="">
        <div className="mt-8 flex flex-col gap-1">
          <Panel heading={"Prices"} defaultOpen />
          <Panel heading={"Markets"} />
          <Panel heading={"Labour"} />
          <Panel heading={"GDP"} />
          <Panel heading={"Health"} />
          <Panel heading={"Money"} />
          <Panel heading={"Trade"} />
          <Panel heading={"Government"} />
          <Panel heading={"Business"} />
          <Panel heading={"Consumer"} />
          <Panel heading={"Housing"} />
          <Panel heading={"Taxes"} />
          <Panel heading={"Climate"} />
        </div>
      </div>
    </div>
  );
}
