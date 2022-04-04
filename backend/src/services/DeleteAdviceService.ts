import { inject, injectable } from "tsyringe";
import { Advice } from "../entity/Advice";
import { IAdviceRepository, ICreateAdviceDTO } from "../repositories/IAdviceRepository";

@injectable()
class DeleteAdviceService {
  constructor(
    @inject('AdviceRepository')
    private adviceRepository: IAdviceRepository) { }

  async execute(id: string): Promise<void> {
    await this.adviceRepository.delete(id);

  }
}

export { DeleteAdviceService };
