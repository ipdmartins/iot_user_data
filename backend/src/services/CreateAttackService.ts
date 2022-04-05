import { inject, injectable } from "tsyringe";
import { Attack } from "../entity/Attack";
import { IAttackRepository, ICreateAttackDTO } from "../repositories/IAttackRepository";

@injectable()
class CreateAttackService {
  constructor(
    @inject('AttackRepository')
    private attackRepository: IAttackRepository) { }

  async execute(data: ICreateAttackDTO): Promise<Attack> {
    const attack = await this.attackRepository.create(data);
    
    return attack;
  }
}

export { CreateAttackService };
