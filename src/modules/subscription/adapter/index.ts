import {
  ServerSubscriptionData,
  ServerTransactionData,
  SubscriptionData,
  TransactionData,
} from "../types";

export function transformSubscriptionToServer(
  data: SubscriptionData
): ServerSubscriptionData;
export function transformSubscriptionToServer(
  data: Partial<SubscriptionData>
): Partial<ServerSubscriptionData>;
export function transformSubscriptionToServer(
  data: SubscriptionData | Partial<SubscriptionData>
): ServerSubscriptionData | Partial<ServerSubscriptionData> {
  let convertedData;
  convertedData = { ...data };
  const { id, ...rest } = convertedData;

  return { ...rest, _id: id };
}

export function transformSubscriptionToClient(
  data: ServerSubscriptionData
): SubscriptionData;
export function transformSubscriptionToClient(
  data: Partial<ServerSubscriptionData>
): Partial<SubscriptionData>;
export function transformSubscriptionToClient(
  data: ServerSubscriptionData | Partial<ServerSubscriptionData>
): SubscriptionData | Partial<SubscriptionData> {
  let convertedData;
  convertedData = { ...data };
  const { _id, ...rest } = convertedData || {};

  return { ...rest, id: _id };
}

export function transformTransactionToServer(
  data: TransactionData
): ServerTransactionData;
export function transformTransactionToServer(
  data: Partial<TransactionData>
): Partial<ServerTransactionData>;
export function transformTransactionToServer(
  data: TransactionData | Partial<TransactionData>
): ServerTransactionData | Partial<ServerTransactionData> {
  let convertedData;
  convertedData = { ...data };
  const { id, ...rest } = convertedData;

  return { ...rest, _id: id };
}

export function transformTransactionToClient(
  data: ServerTransactionData
): TransactionData;
export function transformTransactionToClient(
  data: Partial<ServerTransactionData>
): Partial<TransactionData>;
export function transformTransactionToClient(
  data: ServerTransactionData | Partial<ServerTransactionData>
): TransactionData | Partial<TransactionData> {
  let convertedData;
  convertedData = { ...data };
  const { _id, ...rest } = convertedData || {};

  return { ...rest, id: _id };
}
