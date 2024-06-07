import Dow30 from "./Dow30";
import MarketMovers from "./MarketMovers";
import NASDAQ100 from "./NASDAQ100";
import Overview from "./Overview";
import Sectors from "./Sectors";

export default function USMarkets() {
  return (
    <>
      <Overview />
      <br />
      <br />
      <br />
      <MarketMovers />
      <br />
      <br />
      <br />
      <Dow30 />
      <br />
      <br />
      <br />
      <NASDAQ100 />
      <br />
      <br />
      <br />
      <Sectors />
    </>
  );
}
