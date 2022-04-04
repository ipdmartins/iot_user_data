import { inject, injectable } from "tsyringe";
import { Advice } from "../entity/Advice";
import { IAdviceRepository, ICreateAdviceDTO } from "../repositories/IAdviceRepository";

@injectable()
class CreateAdviceService {
  constructor(
    @inject('AdviceRepository')
    private adviceRepository: IAdviceRepository) { }

  async execute(data: ICreateAdviceDTO): Promise<Advice> {
    const advice = await this.adviceRepository.create(data);
    
    return advice;
  }
}

export { CreateAdviceService };
