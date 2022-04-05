import { Category } from "../entity/Category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

interface ICategoryRepository {
  create(data: ICreateCategoryDTO): Promise<Category>;
  index(): Promise<Category[]>;
}

export { ICategoryRepository, ICreateCategoryDTO };
