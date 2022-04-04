import { Attack } from "../entity/Attack";

interface ICreateAttackDTO {
  description: string;
}

interface IAttackRepository {
  create(data: ICreateAttackDTO): Promise<Attack>;
  index(): Promise<Attack[]>;
}

export { IAttackRepository, ICreateAttackDTO };
