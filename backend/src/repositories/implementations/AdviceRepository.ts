import { getRepository, Repository } from 'typeorm';
import { Advice } from '../../entity/Advice';
import { IAdviceRepository, ICreateAdviceDTO } from '../IAdviceRepository';

class AdviceRepository implements IAdviceRepository {
  private repository: Repository<Advice>;

  constructor() {
    this.repository = getRepository(Advice);
  }

  public async create({ description }: ICreateAdviceDTO): Promise<Advice> {
    const advice = await this.repository.create({
      description,
    });

    return this.repository.save(advice);
  }

  public async index(): Promise<Advice[]> {
    const advices = await this.repository.find();

    return advices;
  }

  public async delete(id: string): Promise<void> {
    await this.repository
    .createQueryBuilder('advice')
    .delete()
    .where('advice.id =:id', {
      id,
    })
    .execute();
  }

}

export { AdviceRepository };
