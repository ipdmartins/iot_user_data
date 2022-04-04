import { getRepository, Repository } from 'typeorm';
import { Attack } from '../../entity/Attack';
import { IAttackRepository, ICreateAttackDTO } from '../IAttackRepository';


class AttackRepository implements IAttackRepository {
  private repository: Repository<Attack>;

  constructor() {
    this.repository = getRepository(Attack);
  }

  public async create({ description }: ICreateAttackDTO): Promise<Attack> {
    const attack = await this.repository.create({
      description,
    });

    return this.repository.save(attack);
  }

  public async index(): Promise<Attack[]> {
    const attacks = await this.repository.find();

    return attacks;
  }

}

export { AttackRepository };
