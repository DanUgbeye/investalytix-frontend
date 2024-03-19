"use client";

import { STOCK_DESCRIPTION_MENU } from "@/app/ticker/[ticker]/stock-description/stock-description.types";
import Mapper from "@/components/mapper";
import { Button } from "@/components/ui/button";
import PAGES from "@/data/page-map";
import { TICKER_NAV_TABS } from "@/features/ticker/components/ticker-nav/ticker-sidenav.types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export interface StockDescriptionMenuBarProps {
  ticker: string;
}

function StockDescriptionMenuBar(props: StockDescriptionMenuBarProps) {
  const { ticker } = props;
  const pathname = usePathname();

  const basePath = useMemo(
    () =>
      `${PAGES.TICKER}/${ticker}/${TICKER_NAV_TABS.STOCK_DESCRIPTION}` as const,
    [ticker]
  );

  const activeTab = useMemo(() => {
    let activePath: string = STOCK_DESCRIPTION_MENU.SUMMARY.path;

    const navItems = Object.values(STOCK_DESCRIPTION_MENU);

    for (let i = 0; i < navItems.length; i++) {
      const path = navItems[i].path;

      if (pathname.includes(path)) {
        activePath = path;
        break;
      }
    }

    return activePath;
  }, [pathname]);

  return (
    <div className=" py-8 ">
      <div className=" flex justify-between gap-x-12 overflow-x-auto ">
        <Mapper
          id="stock-description-menu"
          list={Object.values(STOCK_DESCRIPTION_MENU)}
          component={(props) => {
            const {
              item: { label, path },
            } = props;

            return (
              <Button
                variant={"link"}
                className={cn(
                  " rounded-none border-b-2 px-0 font-bold hover:no-underline ",
                  {
                    " border-b-primary-base ": activeTab === path,
                    " border-transparent hover:border-primary-base ":
                      activeTab !== path,
                  }
                )}
                asChild
              >
                <Link href={`${basePath}/${path}`}>{label}</Link>
              </Button>
            );
          }}
        />
      </div>
    </div>
  );
}

export default StockDescriptionMenuBar;
