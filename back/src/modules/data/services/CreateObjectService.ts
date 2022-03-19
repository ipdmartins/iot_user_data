import { inject, injectable } from "tsyringe";
import { ICreateObjectDTO, IObjectRepository } from "../repositories/IObjectRepository";

@injectable()// isso faz com que a classe possa ser injetada por outra classe
class CreateObjectService {
  constructor(
    @inject('ObjectRepository')
    private objectRepository: IObjectRepository) { }

  async execute(data: ICreateObjectDTO): Promise<void> {
    const objectAlreadyExists = await this.objectRepository.showByName(data.name);

    if (objectAlreadyExists) {
      throw new Error('Object already exists');
    }

    await this.objectRepository.create(data);
  }
}

export { CreateObjectService };
