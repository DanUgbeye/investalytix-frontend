import { News } from "../types";

class NewsUtil {
  sortNews<TNews extends News>(news: TNews[], order: "asc" | "desc" = "asc") {
    return news.sort((a, b) => {
      if (order === "asc") {
        return (
          new Date(a.publishedDate).getTime() -
          new Date(b.publishedDate).getTime()
        );
      }

      return (
        new Date(b.publishedDate).getTime() -
        new Date(a.publishedDate).getTime()
      );
    });
  }
}

export const newsUtil = new NewsUtil();
