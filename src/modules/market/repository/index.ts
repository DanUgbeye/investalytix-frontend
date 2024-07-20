import { TickerChange } from "@/modules/ticker/types";
import { TickerChangeSchema } from "@/modules/ticker/validation";
import { RequestOptions } from "@/types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import {
  MarketOpen,
  SectorPerformance,
  SectorPerformanceHistory,
} from "../types";
import {
  MarketOpenSchema,
  SectorPerformanceHistorySchema,
  SectorPerformanceSchema,
} from "../validation";
import { Watchlist } from "@/modules/watchlist/types";

export class MarketRepository {
  constructor(private axios: AxiosInstance) {}

  async isStockMarketOpen(
    exchange: string,
    options?: RequestOptions | undefined
  ): Promise<MarketOpen> {
    try {
      const searchParams = new URLSearchParams();
      searchParams.append("exchange", exchange);

      const path = `/market/is-market-open?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: MarketOpen }>(path, options);

      let validation = MarketOpenSchema.safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getSectorPerformance(
    options?: RequestOptions
  ): Promise<SectorPerformance[]> {
    try {
      const path = `/market/sector-performance`;
      let res = await this.axios.get<{
        data: SectorPerformance[];
      }>(path, options);

      let validation = z
        .array(SectorPerformanceSchema)
        .safeParse(res.data.data);

      if (validation.error) {
        console.log(validation.error.issues);
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getSectorPerformanceHistory(
    filter?: { from?: Date; to?: Date; limit?: number },
    options?: RequestOptions
  ): Promise<SectorPerformanceHistory[]> {
    try {
      const searchParams = new URLSearchParams();

      if (filter?.from) {
        searchParams.append("from", filter.from.toLocaleDateString("en-CA"));
      }
      if (filter?.to) {
        searchParams.append("to", filter.to.toLocaleDateString("en-CA"));
      }
      if (filter?.limit) {
        searchParams.append("limit", String(filter.limit));
      }

      const path = `/market/sector-performance-history?${searchParams.toString()}`;
      let res = await this.axios.get<{
        data: SectorPerformanceHistory[];
      }>(path, options);

      let validation = z
        .array(SectorPerformanceHistorySchema)
        .safeParse(res.data.data);

      if (validation.error) {
        console.log(validation.error.issues);
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getTrendingStocks(options?: RequestOptions): Promise<TickerChange[]> {
    try {
      const path = `/market/actives`;
      let res = await this.axios.get<{
        data: TickerChange[];
      }>(path, options);

      let validation = z.array(TickerChangeSchema).safeParse(res.data.data);

      if (validation.error) {
        console.log(validation.error.issues);
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}
