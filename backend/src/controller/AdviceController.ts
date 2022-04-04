import { Request, Response } from 'express';
import { container, singleton } from 'tsyringe';
import { ClassTransformer } from 'class-transformer';
import { CreateAdviceService } from '../services/CreateAdviceService';
import { IndexAdviceService } from '../services/IndexAdviceService';
import { DeleteAdviceService } from '../services/DeleteAdviceService';

class AdviceController {
  private static instance: AdviceController;

  private constructor() {
    // Construtor privado para evitar inicialização externa
  }

  public static getInstance(): AdviceController {
    if (!AdviceController.instance) {
      AdviceController.instance = new AdviceController();
    }

    return AdviceController.instance;
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const createAdviceService = container.resolve(CreateAdviceService);

    const advice = await createAdviceService.execute(request.body);

    return response.json(advice);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexAdviceService = container.resolve(IndexAdviceService);

    const advices = await indexAdviceService.execute();

    return response.json(advices);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const deleteAdviceService = container.resolve(DeleteAdviceService);

    await deleteAdviceService.execute(request.params.id);

    return response
      .status(200)
      .send({ message: 'Advice successully deleted' });
  }

}

export default AdviceController;