import { inject, injectable } from "tsyringe";
import { Category } from "../entity/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../repositories/ICategoryRepository";

@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository) { }

  async execute(data: ICreateCategoryDTO): Promise<Category> {
    const category = await this.categoryRepository.create(data);
    
    return category;
  }
}

export { CreateCategoryService };
