import { Advice } from "../entity/Advice";

interface ICreateAdviceDTO {
  description: string;
}

interface IAdviceRepository {
  create(data: ICreateAdviceDTO): Promise<Advice>;
  index(): Promise<Advice[]>;
  delete(id: string): Promise<void>;
}

export { IAdviceRepository, ICreateAdviceDTO };
