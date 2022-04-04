import { ObjectAttack } from "../entity/ObjectAttack";

interface ICreateObjectAttackDTO {
  id_object: string;
  id_attack: string;
}

interface IObjectAttackRepository {
  create(data: ICreateObjectAttackDTO): Promise<ObjectAttack>;
}

export { IObjectAttackRepository, ICreateObjectAttackDTO };
