import { inject, injectable } from "tsyringe";
import { Attack } from "../entity/Attack";
import { IAttackRepository } from "../repositories/IAttackRepository";

@injectable()
class IndexAttackService {
  constructor(
    @inject('AttackRepository')
    private attackRepository: IAttackRepository) { }

  async execute(): Promise<Attack[]> {
    const attacks = await this.attackRepository.index();
    
    return attacks;
  }
}

export { IndexAttackService };
