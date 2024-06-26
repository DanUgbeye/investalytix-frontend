import { StateCreator } from "zustand";
import { AppStore } from "..";
import { GeneralNews, News } from "@/modules/news/types";

export type NewsState = {
  currentNews?: News | GeneralNews;
};

export type NewsActions = {
  setNews: (news?: News | GeneralNews) => void;
};

export type NewsStore = NewsState & NewsActions;

export const createNewsStore: StateCreator<AppStore, [], [], NewsStore> = (
  set
) => ({
  currentNews: undefined,
  setNews: (news) => set({ currentNews: news }),
});
