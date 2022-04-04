import { inject, injectable } from "tsyringe";
import { Category } from "../entity/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../repositories/ICategoryRepository";

@injectable()
class IndexCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository) { }

  async execute(): Promise<Category[]> {
    const category = await this.categoryRepository.index();
    
    return category;
  }
}

export { IndexCategoryService };
