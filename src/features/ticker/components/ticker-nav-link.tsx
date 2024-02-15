import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";

export interface TickerNavLinkProps
  extends Omit<LinkProps, "href">,
    HTMLAttributes<HTMLAnchorElement> {
  icon: any;
  tabName: string;
  active?: boolean;
  href: string;
}

export default function TickerNavLink(props: TickerNavLinkProps) {
  const {
    icon: Icon,
    className,
    tabName,
    active,
    href,
    children,
    ...rest
  } = props;
  const searchParams = new URLSearchParams(useSearchParams());
  searchParams.set("tab", tabName);

  return (
    <Link
      {...rest}
      href={`${href}?${searchParams.toString()}`}
      className={cn(
        " grid h-14 grid-cols-[auto,1fr] items-center gap-x-3 px-4 duration-300 hover:text-primary-base ",
        active && " bg-primary-base text-white hover:text-white",
        className
      )}
    >
      <Icon className=" size-6" />
      <span className=" text-left text-sm font-bold ">{children}</span>
    </Link>
  );
}
