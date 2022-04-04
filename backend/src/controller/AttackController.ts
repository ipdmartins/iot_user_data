import { Request, Response } from 'express';
import { container, singleton } from 'tsyringe';
import { ClassTransformer } from 'class-transformer';
import { CreateAttackService } from '../services/CreateAttackService';
import { IndexAttackService } from '../services/IndexAttackService';

class AttackController {
  private static instance: AttackController;

  private constructor() {
    // Construtor privado para evitar inicialização externa
  }

  public static getInstance(): AttackController {
    if (!AttackController.instance) {
      AttackController.instance = new AttackController();
    }

    return AttackController.instance;
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const createAttackService = container.resolve(CreateAttackService);

    const attack = await createAttackService.execute(request.body);

    return response.json(attack);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexAttackService = container.resolve(IndexAttackService);

    const attacks = await indexAttackService.execute();

    return response.json(attacks);
  }

}

export default AttackController;