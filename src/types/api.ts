/* eslint-disable camelcase */
export type SubCategories = {
  name: string;
  id: number;
};

export type CategoriesProps = {
  categories: Array<{
    name: string;
    id: number;
    subCategories?: SubCategories[];
  }>;
};
