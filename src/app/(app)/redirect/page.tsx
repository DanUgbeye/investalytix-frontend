import { getTickerStockDescriptionRoute } from "@/route";
import { redirect } from "next/navigation";

const a = { params: {}, searchParams: { tvwidgetsymbol: "NYSE:WMT" } };

export default function redirectPage(props: {
  params: {};
  searchParams: {
    tvwidgetsymbol: string;
  };
}) {
  let ticker = (
    props.searchParams.tvwidgetsymbol.split(":")[1] ?? "aapl"
  ).toUpperCase();

  return redirect(getTickerStockDescriptionRoute(ticker));
}
