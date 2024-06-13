import { RequestOptions } from "@/types";
import { AxiosInstance } from "axios";
import { News } from "../types";
import { NewsSchema } from "../validation";
import { handleAPIError } from "@/utils/api-utils";
import { z } from "zod";

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
      let res = await this.axios.get<{ data: News[] }>(path, options);

      let validation = z.array(NewsSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}
