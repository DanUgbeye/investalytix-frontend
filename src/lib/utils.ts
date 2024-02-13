import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTimestamp(timestamp: string | number) {
  const date = new Date(timestamp);

  const formattedTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZoneName: "short",
  }).format(date);

  return formattedTime;
}
