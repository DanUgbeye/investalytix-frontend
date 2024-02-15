import React, { PropsWithChildren } from "react";

export interface StockDescriptionLayoutProps extends PropsWithChildren {}

function StockDescriptionLayout(props: StockDescriptionLayoutProps) {
  const { children } = props;
  return (
    <div>
      {/* MENU NAVIGATION */}
      <div className="  ">MENU STUFFS</div>

      {children}
    </div>
  );
}

export default StockDescriptionLayout;
