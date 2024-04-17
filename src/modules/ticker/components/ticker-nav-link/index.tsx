import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";

export interface TickerNavLinkProps
  extends Omit<LinkProps, "href">,
    HTMLAttributes<HTMLAnchorElement> {
  icon?: any;
  active?: boolean;
  href: string;
  variant?: "desktop" | "mobile";
}

export default function TickerNavLink(props: TickerNavLinkProps) {
  const {
    icon: Icon,
    className,
    active,
    href,
    children,
    variant = "desktop",
    ...rest
  } = props;

  const isDesktop = variant === "desktop";
  const isMobile = variant === "mobile";

  return (
    <Link
      {...rest}
      href={href}
      className={cn(
        " grid items-center duration-300 hover:text-primary-base ",
        {
          " h-14 grid-cols-[auto,1fr] gap-x-3 px-4  ": isDesktop,
          " items-center whitespace-nowrap p-2.5 ": isMobile,
          " bg-primary-base text-white hover:text-white ": active && isDesktop,
          " text-primary-base ": active && isMobile,
        },
        className
      )}
    >
      {isDesktop && Icon && <Icon className=" size-6" />}

      <span
        className={cn(" text-sm font-bold ", {
          " text-left ": isDesktop,
          "text-center": isMobile,
        })}
      >
        {children}
      </span>
    </Link>
  );
}
