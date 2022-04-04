import { getRepository, Repository } from 'typeorm';
import { Objects } from '../../entity/Object';
import { ICreateObjectDTO, IObjectRepository } from '../IObjectRepository';

class ObjectRepository implements IObjectRepository {
  private repository: Repository<Objects>; // ??????

  constructor() {
    this.repository = getRepository(Objects);
  }

  public async create({ name, description }: ICreateObjectDTO): Promise<Objects> {
    const object = await this.repository.create({
      name,
      description,
    });

    return this.repository.save(object);
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

  public async list(): Promise<Objects[]> {
    throw new Error('Method not implemented.');
  }
  public async update(data: ICreateObjectDTO): Promise<Objects> {
    throw new Error('Method not implemented.');
  }
  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

}

export { ObjectRepository };
