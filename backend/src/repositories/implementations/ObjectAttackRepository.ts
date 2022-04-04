import { getRepository, Repository } from 'typeorm';
import { ObjectAttack } from '../../entity/ObjectAttack';
import { ICreateObjectAttackDTO, IObjectAttackRepository } from '../IObjectAttackRepository';

class ObjectAttackRepository implements IObjectAttackRepository {
  private repository: Repository<ObjectAttack>;

  constructor() {
    this.repository = getRepository(ObjectAttack);
  }

  public async create(data: ICreateObjectAttackDTO): Promise<ObjectAttack> {
    const objectAttack = await this.repository.create(data);

    return this.repository.save(objectAttack);
  }

}

export { ObjectAttackRepository };
