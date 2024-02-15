import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";

export interface TickerNavLinkProps
  extends Omit<LinkProps, "href">,
    HTMLAttributes<HTMLAnchorElement> {
  icon: any;
  active?: boolean;
  href: string;
}

export default function TickerNavLink(props: TickerNavLinkProps) {
  const { icon: Icon, className, active, href, children, ...rest } = props;

  return (
    <Link
      {...rest}
      href={href}
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
