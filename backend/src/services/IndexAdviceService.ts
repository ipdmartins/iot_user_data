import { inject, injectable } from "tsyringe";
import { Advice } from "../entity/Advice";
import { IAdviceRepository, ICreateAdviceDTO } from "../repositories/IAdviceRepository";

@injectable()
class IndexAdviceService {
  constructor(
    @inject('AdviceRepository')
    private adviceRepository: IAdviceRepository) { }

  async execute(): Promise<Advice[]> {
    const advices = await this.adviceRepository.index();
    
    return advices;
  }
}

export { IndexAdviceService };
