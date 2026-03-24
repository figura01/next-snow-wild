import { create } from "zustand";

type CatalogState = {
  search: string;
  categories: string[];
  sizes: string[];

  setSearch: (value: string) => void;
  toggleCategory: (category: string) => void;
};

export const useCatalogStore = create<CatalogState>((set) => ({
  search: "",
  categories: [],
  sizes: [],

  setSearch: (value) => set({ search: value }),

  toggleCategory: (category) =>
    set((state) => ({
      categories: state.categories.includes(category)
        ? state.categories.filter((c) => c !== category)
        : [...state.categories, category],
    })),
}));
