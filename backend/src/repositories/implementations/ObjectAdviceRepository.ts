import { getRepository, Repository } from 'typeorm';
import { ObjectAdvice } from '../../entity/ObjectAdvice';
import { ICreateObjectAdviceDTO, IObjectAdviceRepository } from '../IObjectAdviceRepository';


class ObjectAdviceRepository implements IObjectAdviceRepository {
  private repository: Repository<ObjectAdvice>;

  constructor() {
    this.repository = getRepository(ObjectAdvice);
  }

  public async create(data: ICreateObjectAdviceDTO): Promise<ObjectAdvice> {
    const objectAdvice = await this.repository.create(data);

    return this.repository.save(objectAdvice);
  }

}

export { ObjectAdviceRepository };
