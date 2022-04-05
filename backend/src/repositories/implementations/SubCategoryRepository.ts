import { getRepository, Repository } from 'typeorm';
import { SubCategory } from '../../entity/SubCategory';
import { ICreateSubCategoryDTO, ISubCategoryRepository } from '../ISubCategoryRepository';

class SubCategoryRepository implements ISubCategoryRepository {
  private repository: Repository<SubCategory>;

  constructor() {
    this.repository = getRepository(SubCategory);
  }

  public async create(data: ICreateSubCategoryDTO): Promise<SubCategory> {
    const subCategory = await this.repository.create(data);

    return this.repository.save(subCategory);
  }

  public async listByIdCategory(idCategory: string): Promise<SubCategory[]> {
    const subCategories = await this.repository
      .createQueryBuilder('sub_category')
      .where('sub_category.id_category = :idCategory', {
        idCategory,
      })
      .orderBy('sub_category.name', 'ASC')
      .getMany();

    return subCategories;
  }

}

export { SubCategoryRepository };
