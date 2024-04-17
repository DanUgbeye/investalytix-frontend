"use client";

import { buttonVariants } from "@/components/ui/button";
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
      {subMenu.map(({ label, path }, index) => {
        return (
          <Link
            key={`sub-menu-${label}-${index}`}
            href={path}
            className={cn(
              buttonVariants({ variant: "link" }),
              " rounded-none border-b-2 px-0 font-bold hover:no-underline ",
              {
                " border-b-primary-base ": active === path,
                " border-transparent hover:border-primary-base ":
                  active !== path,
              }
            )}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}

export default TickerSubMenuBar;
