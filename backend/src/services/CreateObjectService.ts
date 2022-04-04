import { inject, injectable } from "tsyringe";
import { Objects } from "../entity/Object";
import { IObjectAdviceRepository } from "../repositories/IObjectAdviceRepository";
import { IObjectAttackRepository } from "../repositories/IObjectAttackRepository";
import { ICreateObjectDTO, IObjectRepository } from "../repositories/IObjectRepository";
import { IObjectVulnerabilityRepository } from "../repositories/IObjectVulnerabilityRepository";

@injectable()
class CreateObjectService {
  constructor(
    @inject('ObjectRepository')
    private objectRepository: IObjectRepository,
    @inject('ObjectAdviceRepository')
    private objectAdviceRepository: IObjectAdviceRepository,
    @inject('ObjectAttackRepository')
    private objectAttackRepository: IObjectAttackRepository,
    @inject('ObjectVulnerabilityRepository')
    private objectVulnerabilityRepository: IObjectVulnerabilityRepository,
  ) { }

  async execute(data: ICreateObjectDTO): Promise<Objects> {
    const objectAlreadyExists = await this.objectRepository.showByName(data.name);

    if (objectAlreadyExists) {
      throw new Error('Object already exists');
    }

    const object = await this.objectRepository.create(data);

    if (data.id_advice) {
      const dataObjectAdvice = {
        id_object: object.id,
        id_advice: data.id_advice,
      };

      await this.objectAdviceRepository.create(dataObjectAdvice)
    }

    if (data.id_attack) {
      const dataObjectAttack = {
        id_object: object.id,
        id_attack: data.id_attack,
      };

      await this.objectAttackRepository.create(dataObjectAttack);
    }

    if (data.id_vulnerability) {
      const dataObjectVulnerability = {
        id_object: object.id,
        id_vulnerability: data.id_vulnerability,
      };

      await this.objectVulnerabilityRepository.create(dataObjectVulnerability)
    }

    return object;
  }
}

export { CreateObjectService };
