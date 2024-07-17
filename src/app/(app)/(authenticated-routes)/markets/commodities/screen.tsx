import Agriculture from "@/modules/market/components/Commodities/Agriculture";
import CurrencyFutures from "@/modules/market/components/Commodities/CurrencyFutures";
import IndexFutures from "@/modules/market/components/Commodities/IndexFutures";
import IntrestRateFutures from "@/modules/market/components/Commodities/IntrestRateFutures";
import Livestock from "@/modules/market/components/Commodities/Livestock";

export default async function Screen() {
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
