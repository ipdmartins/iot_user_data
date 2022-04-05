import { Objects } from "../entity/Object";

interface ICreateObjectDTO {
  id_sub_category: string;
  id_advice?: string;
  id_attack?: string;
  id_vulnerability?: string;
  name: string;
  description?: string;
  image?: string;
}

interface IObjectRepository {
  create(data: ICreateObjectDTO): Promise<Objects>;
  listByIdSubCategory(idSubCategory: string): Promise<Objects[]>;
  showByName(name: string): Promise<Objects | undefined>;
  update(data: ICreateObjectDTO): Promise<Objects>;
  delete(id: string): Promise<void>;
}

export { IObjectRepository, ICreateObjectDTO };
