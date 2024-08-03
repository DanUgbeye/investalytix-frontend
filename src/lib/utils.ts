import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

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

export function tailwindCSS() {
  return resolveConfig(tailwindConfig);
}

export function formatCurrency(price: number) {
  return new Intl.NumberFormat("en-US").format(price);
}

export function calculateMedian(numbers: number[]): number {
  // Sort the array in ascending order
  const sortedNumbers = numbers.slice().sort((a, b) => a - b);
  const n = sortedNumbers.length;

  // Check if the length of the array is odd or even
  if (n % 2 === 1) {
    // If odd, return the middle element
    return sortedNumbers[Math.floor(n / 2)];
  } else {
    // If even, return the average of the two middle elements
    const middle1 = sortedNumbers[n / 2 - 1];
    const middle2 = sortedNumbers[n / 2];
    return (middle1 + middle2) / 2;
  }
}

type GDP = { date: string; value: number };
type GDPWithYoY = { date: string; value: number; yoy?: number };

export function calculateYoY(gdpData: GDP[]): GDPWithYoY[] {
  // Sort the data by date in ascending order
  const sortedGDPData = gdpData
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const result: GDPWithYoY[] = [];

  for (let i = 0; i < sortedGDPData.length; i++) {
    const currentYear = sortedGDPData[i];
    let yoyChange: number | undefined = undefined;

    // Find the previous year with the same month and day
    const previousYear = sortedGDPData.find(
      (entry) =>
        new Date(entry.date).getFullYear() ===
          new Date(currentYear.date).getFullYear() - 1 &&
        new Date(entry.date).getMonth() ===
          new Date(currentYear.date).getMonth() &&
        new Date(entry.date).getDate() === new Date(currentYear.date).getDate()
    );

    if (previousYear) {
      yoyChange =
        ((currentYear.value - previousYear.value) / previousYear.value) * 100;
    }

    result.push({
      date: currentYear.date,
      value: currentYear.value,
      yoy: yoyChange,
    });
  }

  return result;
}
