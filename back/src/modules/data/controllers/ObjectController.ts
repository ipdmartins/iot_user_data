import { Request, Response} from 'express';
import { container } from 'tsyringe';
// import { Type, plainToClass } from 'class-transformer';
import { CreateObjectService } from '../services/CreateObjectService';

class ObjectController {
  private static instance: ObjectController;

  private constructor() {
    // Construtor privado para evitar inicialização externa
  }

  public static getInstance(): ObjectController {
    if (!ObjectController.instance) {
      ObjectController.instance = new ObjectController();
    }

    return ObjectController.instance;
  }

  public async create(request: Request, response: Response): Promise<Response>{

    const createObjectService = container.resolve(CreateObjectService);
  
    const object = await createObjectService.execute(request.body);
  
    return response.json(object);
  }
}

export { ObjectController };