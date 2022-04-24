import { inject, injectable } from "tsyringe";
import { Objects } from "../entity/Object";
import { ICreateObjectDTO, IObjectRepository } from "../repositories/IObjectRepository";

@injectable()
class ListObjectByNameService {
  constructor(
    @inject('ObjectRepository')
    private objectRepository: IObjectRepository,
  ) { }

  async execute(name: string): Promise<Objects[]> {
    console.log('name');
    console.log(name);
    
    const objects = await this.objectRepository.listByName(name);

    return objects;
  }
}

export { ListObjectByNameService };
