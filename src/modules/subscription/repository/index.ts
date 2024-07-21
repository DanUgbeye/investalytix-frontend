import { RequestOptions } from "@/types";
import { handleAPIError } from "@/utils/api-utils";
import { AxiosInstance } from "axios";
import { z } from "zod";
import {
  transformSubscriptionToClient,
  transformTransactionToClient,
} from "../adapter";
import { SubscriptionData, TransactionData } from "../types";
import {
  ServerSubscriptionSchema,
  ServerTransactionSchema,
} from "../validation";

export class SubscriptionRepository {
  constructor(private readonly axios: AxiosInstance) {}

  async getSubscriptionLink(
    plan: string,
    options?: RequestOptions
  ): Promise<SubscriptionData> {
    try {
      const path = `/subscriptions`;
      let res = await this.axios.get<{ data: SubscriptionData }>(path, options);

      let validation = ServerSubscriptionSchema.transform((data) =>
        transformSubscriptionToClient(data)
      ).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getUserSubscription(
    options?: RequestOptions
  ): Promise<SubscriptionData> {
    try {
      const path = `/subscriptions`;
      let res = await this.axios.get<{ data: SubscriptionData }>(path, options);

      let validation = ServerSubscriptionSchema.transform((data) =>
        transformSubscriptionToClient(data)
      ).safeParse(res.data.data);

      if (validation.error) {
        throw new Error("Something went wrong on our end");
      }

      return validation.data;
    } catch (error: any) {
      let err = handleAPIError(error);
      throw err;
    }
  }

  async getUserTransactiontionHistory(
    options?: RequestOptions
  ): Promise<TransactionData[]> {
    try {
      const path = `/subscriptions/history`;
      let res = await this.axios.get<{ data: TransactionData[] }>(
        path,
        options
      );

      let validation = z
        .array(
          ServerTransactionSchema.transform((data) =>
            transformTransactionToClient(data)
          )
        )
        .safeParse(res.data.data);

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
