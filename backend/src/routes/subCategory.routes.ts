import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import SubCategoryController from '../controller/SubCategoryController';

const subCategoriesRoutes = Router();

const subCategoryController = SubCategoryController.getInstance();

subCategoriesRoutes.post('/', subCategoryController.create);

subCategoriesRoutes.get(
  '/:idCategory',
  celebrate({
    [Segments.PARAMS]: {
      idCategory: Joi.optional().default(''),
    },
  }),
  subCategoryController.listByIdCategory,
);

export default  subCategoriesRoutes;
