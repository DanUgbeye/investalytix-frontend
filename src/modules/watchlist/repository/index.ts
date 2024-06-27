import { RequestOptions } from "@/types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import { transformWatchlistToClient } from "../adapter";
import { NewWatchlist, ServerWatchlist } from "../types";
import { ServerWatchlistSchema } from "../validation";

export default class WatchlistRepository {
  constructor(private axios: AxiosInstance) {}

  async getUserWatchlist(options?: RequestOptions) {
    const path = `/watchlists`;

    try {
      const { data } = await this.axios.get<{ data: ServerWatchlist[] }>(
        path,
        options
      );

      let validation = z
        .array(
          ServerWatchlistSchema.transform((data) =>
            transformWatchlistToClient(data)
          )
        )
        .safeParse(data.data);

      if (!validation.success) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async addToWatchlist(watchlistData: NewWatchlist, options?: RequestOptions) {
    const path = `/watchlists`;

    try {
      const { data } = await this.axios.post<{ data: ServerWatchlist }>(
        path,
        watchlistData,
        options
      );

      let validation = ServerWatchlistSchema.transform((data) =>
        transformWatchlistToClient(data)
      ).safeParse(data.data);

      if (!validation.success) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async removeFromWatchlist(watchlistId: string, options?: RequestOptions) {
    const path = `/watchlists/${watchlistId}`;

    try {
      await this.axios.delete<{}>(path, options);

      return true;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }
}
