"use client";

import { clientAPI } from "@/config/client/api";
import { TickerRepository } from "../repository";

export function useTickerRepository() {
  return new TickerRepository(clientAPI);
}
