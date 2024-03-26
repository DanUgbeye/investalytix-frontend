import StockDescriptionSubMenuBar from "./sub-menu";
import { PropsWithChildren } from "react";

export interface StockDescriptionLayoutProps extends PropsWithChildren {
  params: {
    ticker: string;
  };
}

function StockDescriptionLayout(props: StockDescriptionLayoutProps) {
  const {
    children,
    params: { ticker },
  } = props;

  return (
    <div>
      {/* MENU NAVIGATION */}
      <div className=" py-8 ">
        <StockDescriptionSubMenuBar ticker={ticker} />
      </div>

      {children}
    </div>
  );
}

export default StockDescriptionLayout;
