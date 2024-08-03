import { News } from "@/modules/news/types";
import { StateCreator } from "zustand";
import { AppStore } from "..";

export type NewsState = {
  currentNews?: News;
};

export type NewsActions = {
  setNews: (news?: News) => void;
};

export type NewsStore = NewsState & NewsActions;

export const createNewsStore: StateCreator<AppStore, [], [], NewsStore> = (
  set
) => ({
  currentNews: undefined,
  setNews: (news) => set({ currentNews: news }),
});
