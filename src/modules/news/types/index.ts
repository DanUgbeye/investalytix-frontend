export type News = {
  publishedDate: Date;
  title: string;
  image: string | null;
  site: string;
  text: string;
  url: string;
  symbols: string[];
};

export type BezingaOriginalNews = {
  id: number;
  author: string;
  created: Date;
  updated: Date;
  title: string;
  teaser: string;
  body: string;
  url: string;
  image: Array<{
    size: "thumb" | "small" | "large";
    url: string;
  }>;
  channels: Array<{ name: string }>;
  stocks: Array<{ name: string }>;
  tags: Array<{ name: string }>;
};

export type BezingaNewsChannel =
  | "News"
  | "Markets"
  | "Earnings"
  | "Top Stories"
  | "Trading Ideas"
  | "Short Ideas"
  | "Short Sellers"
  | "Offerings"
  | "Options"
  | "Equities"
  | "Analyst Color"
  | "Macro Economic Events"
  | "Sector ETFs"
  | "Bonds"
  | "Economics"
  | "ETFs"
  | "Buybacks"
  | "Cryptocurrency"
  | "Movers"
  | "Management"
  | "Legal"
  | "Earnings Beats"
  | "Reiteration"
  | "Market Summary"
  | "Technicals"
  | "Previews"
  | "Tech"
  | "Analyst Ratings"
  | "Price Target"
  | "Gaming";

export type BezingaNewsFilter = {
  page?: number;
  pageSize?: number;
  displayOutput?: "full" | "abstract" | "headline";
  date?: Date;
  dateFrom?: Date;
  dateTo?: Date;
  updatedSince?: Date;
  publishedSince?: Date;
  sort?:
    | "id:asc"
    | "id:desc"
    | "created:asc"
    | "created:desc"
    | "updated:asc"
    | "updated:desc";

  tickers?: string[];
  channels?: BezingaNewsChannel[];
  topics?: string[];
  authors?: string[];
};

export type ProviderNews<
  TProvideName extends string,
  TProviderData extends any = undefined,
> = News & {
  provider: TProvideName;
  original?: TProviderData;
};

export type BezingaNews = ProviderNews<"Bezinga", BezingaOriginalNews>;
export type FMPNews = ProviderNews<"FMP">;
