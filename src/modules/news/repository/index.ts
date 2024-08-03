import { RequestOptions } from "@/types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import { BezingaNews, BezingaNewsFilter, FMPNews, News } from "../types";
import { NewsSchema } from "../validation";

export class NewsRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async getNews(
    query: string,
    options?: RequestOptions | undefined
  ): Promise<News[]> {
    try {
      const searchParams = new URLSearchParams();
      searchParams.append("query", query);

      const path = `/news?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: FMPNews[] }>(path, options);

      // let validation = z.array(NewsSchema).safeParse(res.data.data);

      // if (validation.error) {
      //   throw new Error("Something went wrong on our end");
      // }

      return res.data.data;
    } catch (error: any) {
      console.log(error)
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getBezingaNews(
    filter?: BezingaNewsFilter,
    options?: RequestOptions | undefined
  ) {
    try {
      const searchParams = new URLSearchParams();
      const defaultFilters: BezingaNewsFilter = {
        displayOutput: "full",
      };

      if (filter !== undefined) {
        for (const [key, value] of Object.entries({
          ...filter,
          ...defaultFilters,
        })) {
          let formattedValue: string;
          if (Array.isArray(value)) {
            formattedValue = value.join(",");
          } else {
            formattedValue = String(value);
          }

          searchParams.append(key, formattedValue);
        }
      }

      const path = `/news/bezinga?${searchParams.toString()}`;
      let res = await this.axios.get<{
        data: BezingaNews[];
      }>(path, options);

      // let validation = z.array(NewsSchema).safeParse(res.data.data);

      // if (validation.error) {
      //   throw new Error("Something went wrong on our end");
      // }

      return res.data.data;
    } catch (error: any) {
      console.log(error)
      let err = handleAPIError(error);
      throw err;
    }
  }
}
