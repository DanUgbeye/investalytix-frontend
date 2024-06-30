export type GeneralNews = {
  publishedDate: Date;
  title: string;
  image: string | null;
  site: string;
  text: string;
  url: string;
};

export type News = GeneralNews & {
  symbol: string;
};
