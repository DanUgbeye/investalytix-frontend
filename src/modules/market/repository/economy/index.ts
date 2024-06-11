import {
  BaseRateChange,
  CreditRating,
  DebtToGDPRate,
  EconomyContinent,
  GDPGrowthRate,
  InflationRate,
  InterestRate,
  UnemploymentRate,
} from "../../types";
import { RequestOptions } from "@/types/api.types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";

export class EconomyMarketRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async getEconomicCalendar(
    query: string,
    options?: RequestOptions | undefined
  ): Promise<SearchResult[]> {
    try {
      const searchParams = new URLSearchParams();
      searchParams.append("query", query);

      const path = `/tickers?${searchParams.toString()}`;
      let res = await this.axios.get<{ data: SearchResult[] }>(path, options);

      let validation = z.array(SearchResultSchema).safeParse(res.data.data);

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
