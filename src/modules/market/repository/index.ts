import { RequestOptions } from "@/types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import { SectorPerformance, SectorPerformanceHistory } from "../types";
import {
  SectorPerformanceHistorySchema,
  SectorPerformanceSchema,
} from "../validation";

export class MarketRepository {
  constructor(private axios: AxiosInstance) {}

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
}
