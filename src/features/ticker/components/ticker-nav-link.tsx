import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { HTMLAttributes } from "react";

export interface TickerNavLinkProps
  extends Omit<LinkProps, "href">,
    HTMLAttributes<HTMLAnchorElement> {
  icon: any;
  tabName: string;
  active?: boolean;
}

export default function TickerNavLink(props: TickerNavLinkProps) {
  const { icon: Icon, className, tabName, active, children, ...rest } = props;
  const pathname = usePathname();
  const searchParams = new URLSearchParams(useSearchParams());
  searchParams.set("tab", tabName);

  return (
    <Link
      {...rest}
      href={`${pathname}?${searchParams.toString()}`}
      className={cn(
        " flex h-14 items-center gap-x-3 px-4 duration-300 hover:text-primary-base ",
        active && " bg-primary-base text-white",
        className
      )}
    >
      <Icon className=" size-6" />
      <span className=" text-sm font-bold ">{children}</span>
    </Link>
  );
}
