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
      {/* MENU NAVIGATION */}
      <FinancialsMenuBar ticker={ticker} />

      {children}
    </div>
  );
}

export default FinancialsLayout;
