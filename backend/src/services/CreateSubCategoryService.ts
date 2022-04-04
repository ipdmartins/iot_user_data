import { inject, injectable } from "tsyringe";
import { SubCategory } from "../entity/SubCategory";
import { ICreateSubCategoryDTO, ISubCategoryRepository } from "../repositories/ISubCategoryRepository";

@injectable()
class CreateSubCategoryService {
  constructor(
    @inject('SubCategoryRepository')
    private subCategoryRepository: ISubCategoryRepository) { }

  async execute(data: ICreateSubCategoryDTO): Promise<SubCategory> {
    const subCategory = await this.subCategoryRepository.create(data);

    return subCategory;
  }
}

export { CreateSubCategoryService };
