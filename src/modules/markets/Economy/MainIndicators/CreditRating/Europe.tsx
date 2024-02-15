import Panels from "../../Panels";
import CreditDescTable from "./CreditDescTable";
import CreditRatingTable from "./CreditRatingTable";

export default function Europe() {
  return (
    <div className="">
      <div className="grid gap-5 lg:grid-cols-[1fr,300px]">
        <div className="">
          <CreditRatingTable />

          <p className="mt-14 border border-[#DDDDDD] px-5 py-6">
            This page includes the sovereign debt credit rating for a list of
            countries as reported by major credit rating agencies.
          </p>

          <h2 className="mb-6 mt-10 font-bold">Credit Ratings</h2>

          <CreditDescTable />
        </div>

        <div className="flex flex-col gap-1">
          <Panels heading={"Prices"} defaultOpen />
          <Panels heading={"Markets"} />
          <Panels heading={"Labour"} />
          <Panels heading={"GDP"} />
          <Panels heading={"Health"} />
          <Panels heading={"Money"} />
          <Panels heading={"Trade"} />
          <Panels heading={"Government"} />
          <Panels heading={"Business"} />
          <Panels heading={"Consumer"} />
          <Panels heading={"Housing"} />
          <Panels heading={"Taxes"} />
          <Panels heading={"Climate"} />
        </div>
      </div>
    </div>
  );
}
