import { inject, injectable } from "tsyringe";
import { Objects } from "../entity/Object";
import { ICreateObjectDTO, IObjectRepository } from "../repositories/IObjectRepository";

@injectable()
class ListObjectIdSubcategoryService {
  constructor(
    @inject('ObjectRepository')
    private objectRepository: IObjectRepository,
  ) { }

  async execute(idSubCategory: string): Promise<Objects[]> {
    const objects = await this.objectRepository.listByIdSubCategory(idSubCategory)

    return objects;
  }
}

export { ListObjectIdSubcategoryService };
