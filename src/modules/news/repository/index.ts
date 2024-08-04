import { RequestOptions } from "@/types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import { BezingaNews, BezingaNewsFilter, FMPNews } from "../types";
import { FMPNewsSchema } from "../validation";

export class NewsRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async getFMPNews(
    filter?: { tickers?: string[]; limit?: number; page?: number },
    options?: RequestOptions | undefined
  ): Promise<FMPNews[]> {
    try {
      const searchParams = new URLSearchParams();

      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      const path = `/news/fmp?${searchParams.toString()}`;

      let res = await this.axios.get<{ data: FMPNews[] }>(
        path.toString(),
        options
      );

      let validation = z.array(FMPNewsSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getFMPForexNews(
    filter?: { ticker?: string; limit?: number; page?: number },
    options?: RequestOptions | undefined
  ): Promise<FMPNews[]> {
    try {
      const searchParams = new URLSearchParams();

      if (filter?.ticker) {
        searchParams.append("ticker", String(filter.ticker));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      const path = `/news/fmp/forex?${searchParams.toString()}`;

      let res = await this.axios.get<{ data: FMPNews[] }>(
        path.toString(),
        options
      );

      let validation = z.array(FMPNewsSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getFMPCryptoNews(
    filter?: { ticker?: string; limit?: number; page?: number },
    options?: RequestOptions | undefined
  ): Promise<FMPNews[]> {
    try {
      const searchParams = new URLSearchParams();

      if (filter?.ticker) {
        searchParams.append("ticker", String(filter.ticker));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }
      if (filter?.page) {
        searchParams.append("page", String(filter.page));
      }
      const path = `/news/fmp/crypto?${searchParams.toString()}`;

      let res = await this.axios.get<{ data: FMPNews[] }>(
        path.toString(),
        options
      );

      let validation = z.array(FMPNewsSchema).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
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
      console.log(error);
      let err = handleAPIError(error);
      throw err;
    }
  }
}
