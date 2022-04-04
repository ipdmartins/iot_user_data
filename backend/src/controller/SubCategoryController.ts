import { Request, Response } from 'express';
import { container, singleton } from 'tsyringe';
import { ClassTransformer } from 'class-transformer';
import { CreateSubCategoryService } from '../services/CreateSubCategoryService';
import { ListByIdCategorySubCategoryService } from '../services/ListByIdCategorySubCategoryService';

class SubCategoryController {
  private static instance: SubCategoryController;

  private constructor() {
    // Construtor privado para evitar inicialização externa
  }

  public static getInstance(): SubCategoryController {
    if (!SubCategoryController.instance) {
      SubCategoryController.instance = new SubCategoryController();
    }

    return SubCategoryController.instance;
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const createSubCategoryService = container.resolve(CreateSubCategoryService);

    const subCategory = await createSubCategoryService.execute(request.body);

    return response.json(subCategory);
  }

  public async listByIdCategory(request: Request, response: Response): Promise<Response> {
    const listByIdCategorySubCategoryService = container.resolve(ListByIdCategorySubCategoryService);

    const subCategories = await listByIdCategorySubCategoryService.execute(request.params.idCategory);

    return response.json(subCategories);
  }

}

export default SubCategoryController;