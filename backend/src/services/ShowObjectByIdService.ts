import { inject, injectable } from "tsyringe";
import { Objects } from "../entity/Object";
import { ICreateObjectDTO, IObjectRepository } from "../repositories/IObjectRepository";

@injectable()
class ShowObjectByIdService {
  constructor(
    @inject('ObjectRepository')
    private objectRepository: IObjectRepository,
  ) { }

  async execute(id: string): Promise<Objects> {
    const object = await this.objectRepository.showById(id);

    return object;
  }
}

export { ShowObjectByIdService };
