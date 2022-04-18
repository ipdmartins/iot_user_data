// import { getManager } from "typeorm";
// import { Objects } from "../entity/Object";

import { Request, Response } from 'express';
import { container, singleton } from 'tsyringe';
import { ClassTransformer } from 'class-transformer';
// import { Type, plainToClass } from 'class-transformer';
import { CreateObjectService } from '../services/CreateObjectService';
import { ListObjectIdSubcategoryService } from '../services/ListObjectIdSubcategoryService';
import { ListObjectByNameService } from '../services/ListObjectByNameService';
import { ShowObjectByIdService } from '../services/ShowObjectByIdService';

export class ObjectController {
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

  public async create(request: Request, response: Response): Promise<Response> {

    const createObjectService = container.resolve(CreateObjectService);

    const object = await createObjectService.execute(request.body);

    if (typeof object === 'string') {
      return response.status(400).send(object);
    }

    return response.json(object);
  }

  public async showById(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showObjectByIdService = container.resolve(ShowObjectByIdService);

    const object = await showObjectByIdService.execute(id);

    return response.json(object);
  }

  public async listObjects(request: Request, response: Response): Promise<Response> {
    const { name, idSubCategory } = request.query;

    let resp;

    if (name) {
      const listObjectByNameService = container.resolve(ListObjectByNameService);

      resp = await listObjectByNameService.execute(String(name));
    }

    if (idSubCategory) {
      const listObjectIdSubcategoryService = container.resolve(ListObjectIdSubcategoryService);

      resp = await listObjectIdSubcategoryService.execute(String(idSubCategory));
    }

    return response.json(resp);
  }

}