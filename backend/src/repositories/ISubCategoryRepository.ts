import { SubCategory } from "../entity/SubCategory";

interface ICreateSubCategoryDTO {
  id_category: string;
  name: string;
  description: string;
}

interface ISubCategoryRepository {
  create(data: ICreateSubCategoryDTO): Promise<SubCategory>;
  listByIdCategory(idCategory: string): Promise<SubCategory[]>;
}

export { ISubCategoryRepository, ICreateSubCategoryDTO };
