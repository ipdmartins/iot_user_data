import { Request, Response } from 'express';
import { container, singleton } from 'tsyringe';
import { ClassTransformer } from 'class-transformer';
import { CreateCategoryService } from "../services/CreateCategoryService";
import { IndexCategoryService } from "../services/IndexCategoryService";

class CategoryController {
  private static instance: CategoryController;

  private constructor() {
    // Construtor privado para evitar inicialização externa
  }

  public static getInstance(): CategoryController {
    if (!CategoryController.instance) {
      CategoryController.instance = new CategoryController();
    }

    return CategoryController.instance;
  }

  public async create(request: Request, response: Response): Promise<Response> {

    const createCategoryService = container.resolve(CreateCategoryService);

    const category = await createCategoryService.execute(request.body);

    return response.json(category);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const indexCategoryService = container.resolve(IndexCategoryService);

    const categories = await indexCategoryService.execute();

    return response.json(categories);
  }

}

export default CategoryController;