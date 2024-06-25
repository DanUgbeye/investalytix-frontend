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
    options?: RequestOptions
  ): Promise<SectorPerformanceHistory[]> {
    try {
      const path = `/market/sector-performance-history`;
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
