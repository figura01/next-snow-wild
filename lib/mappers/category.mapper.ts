import { Category } from "@/types/enums";

export const CategoryLabel: Record<Category, string> = {
  [Category.ALL]: "Tous",
  [Category.SKI]: "Skis",
  [Category.SNOWBOARD]: "Snowboards",
  [Category.SHOES]: "Chaussures",
  [Category.POLES]: "Bâtons",
  [Category.HELMET]: "Casques",
};
