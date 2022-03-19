import { Objects } from "../entities/Object";

interface ICreateObjectDTO {
  id?: string;
  name: string;
  description: string;
}

interface IObjectRepository {
  create(data: ICreateObjectDTO): Promise<Objects>;
  showByName(name: string): Promise<Objects>;
  list(): Promise<Objects[]>;
  update(data: ICreateObjectDTO): Promise<Objects>;
  delete(id: string): Promise<void>;
}

export { IObjectRepository, ICreateObjectDTO };
