import { PropsWithChildren } from "react";
import FinancialsMenuBar from "./sub-menu";

export interface FinancialsLayoutProps extends PropsWithChildren {
  params: {
    ticker: string;
  };
}

function FinancialsLayout(props: FinancialsLayoutProps) {
  const {
    children,
    params: { ticker },
  } = props;

  return (
    <div>
      <div className=" py-8 lg:pt-0 ">
        {/* MENU NAVIGATION */}
        <FinancialsMenuBar ticker={ticker} />
      </div>

      {children}
    </div>
  );
}

export default FinancialsLayout;
