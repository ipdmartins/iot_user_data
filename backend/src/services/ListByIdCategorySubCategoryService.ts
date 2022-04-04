import { inject, injectable } from "tsyringe";
import { SubCategory } from "../entity/SubCategory";
import { ISubCategoryRepository } from "../repositories/ISubCategoryRepository";

@injectable()
class ListByIdCategorySubCategoryService {
  constructor(
    @inject('SubCategoryRepository')
    private subCategoryRepository: ISubCategoryRepository) { }

  async execute(idCategory: string): Promise<SubCategory[]> {
    const subCategories = await this.subCategoryRepository.listByIdCategory(idCategory);
    
    return subCategories;
  }
}

export { ListByIdCategorySubCategoryService };
