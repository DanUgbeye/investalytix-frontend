"use client";

import Mapper from "@/components/mapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { HTMLAttributes } from "react";

export interface TickerSubMenuBarProps extends HTMLAttributes<HTMLDivElement> {
  subMenu: { label: string; path: string }[];
  active?: string;
}

function TickerSubMenuBar(props: TickerSubMenuBarProps) {
  const { active, subMenu, className, ...rest } = props;

  return (
    <div
      {...rest}
      className={cn(" flex gap-x-12 overflow-x-auto  ", className)}
    >
      <Mapper
        id="sub-menu"
        list={subMenu}
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
                  " border-b-primary-base ": active === path,
                  " border-transparent hover:border-primary-base ":
                    active !== path,
                }
              )}
              asChild
            >
              <Link href={path}>{label}</Link>
            </Button>
          );
        }}
      />
    </div>
  );
}

export default TickerSubMenuBar;
