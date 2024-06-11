import { RequestOptions } from "@/types/api.types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { EconomicCalendar } from "../../types";

export class EconomyMarketRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async getEconomicCalendar({
    from,
    to,
    options,
  }: {
    from: string;
    to?: string;
    options?: RequestOptions | undefined;
  }): Promise<EconomicCalendar[]> {
    try {
      const searchParams = new URLSearchParams();
      searchParams.append("from", from);
      searchParams.append("to", to ?? "");

      const path = `/market/economic-calendar?${searchParams.toString()}`;

      let res = await this.axios.get<{ data: EconomicCalendar[] }>(
        path,
        options
      );
      console.log(res.data);

      return res.data.data;

      // let validation = z.array(SearchResultSchema).safeParse(res.data.data);

      // if (validation.error) {
      //   throw new Error("Something went wrong on our end");
      // }

      // return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}
