import { ObjectAdvice } from "../entity/ObjectAdvice";

interface ICreateObjectAdviceDTO {
  id_object: string;
  id_advice: string;
}

interface IObjectAdviceRepository {
  create(data: ICreateObjectAdviceDTO): Promise<ObjectAdvice>;
}

export { IObjectAdviceRepository, ICreateObjectAdviceDTO };
