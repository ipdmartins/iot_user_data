import { getRepository, Repository } from 'typeorm';
import { Category } from '../../entity/Category';
import { ICategoryRepository, ICreateCategoryDTO } from '../ICategoryRepository';

class CategoryRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  public async create({ name, description }: ICreateCategoryDTO): Promise<Category> {
    const category = await this.repository.create({
      name,
      description,
    });

    return this.repository.save(category);
  }

  public async index(): Promise<Category[]> {
    const categories = await this.repository.find();

    return categories;
  }

}

export { CategoryRepository };
