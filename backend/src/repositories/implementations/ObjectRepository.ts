import { getRepository, Repository } from 'typeorm';
import { Objects } from '../../entity/Object';
import { ICreateObjectDTO, IObjectRepository } from '../IObjectRepository';

class ObjectRepository implements IObjectRepository {
  private repository: Repository<Objects>; // ??????

  constructor() {
    this.repository = getRepository(Objects);
  }

  public async create(data: ICreateObjectDTO): Promise<Objects> {
    const object = await this.repository.create(data);

    return this.repository.save(object);
  }

  public async listByIdSubCategory(idSubCategory: string): Promise<Objects[]> {
    const objects = await this.repository
      .createQueryBuilder('object')
      .where('object.id_sub_category = :idSubCategory', {
        idSubCategory,
      })
      .getMany();

    return objects;

  }

  public async showByName(name: string): Promise<Objects | undefined> {
    const object = await this.repository
      .createQueryBuilder('object')
      .where('object.name = :name', {
        name,
      })
      .getOne();

    return object;
  }

  public async update(data: ICreateObjectDTO): Promise<Objects> {
    throw new Error('Method not implemented.');
  }
  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

}

export { ObjectRepository };
