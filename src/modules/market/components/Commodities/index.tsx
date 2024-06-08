import Agriculture from "./Agriculture";
import CurrencyFutures from "./CurrencyFutures";
import IndexFutures from "./IndexFutures";
import IntrestRateFutures from "./IntrestRateFutures";
import Livestock from "./Livestock";

export default async function Commodities() {
  return (
    <>
      <Agriculture />
      <br />
      <br />
      <br />
      <Livestock />
      <br />
      <br />
      <br />
      <IndexFutures /> <br /> <br /> <br />
      <IntrestRateFutures /> <br /> <br /> <br />
      <CurrencyFutures />
    </>
  );
}
