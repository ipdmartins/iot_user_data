import { getRepository, Repository } from 'typeorm';
import { Objects } from '../../entities/Object';
import { ICreateObjectDTO, IObjectRepository } from '../IObjectRepository';

class ObjectRepository implements IObjectRepository {
  private repository: Repository<Objects>; // ??????

  constructor() {
    this.repository = getRepository(Objects);
  }

  async create({ name, description }: ICreateObjectDTO): Promise<Objects> {
    const category = this.repository.create({
      name,
      description,
    });

    return this.repository.save(category);
  }
  
  showByName(name: string): Promise<Objects> {
    throw new Error('Method not implemented.');
  }
  list(): Promise<Objects[]> {
    throw new Error('Method not implemented.');
  }
  update(data: ICreateObjectDTO): Promise<Objects> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

}

export { ObjectRepository };
