import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { ObjectController } from '../controller/ObjectController';

const objectsRoutes = Router();

const objectController = ObjectController.getInstance();

objectsRoutes.post('/', objectController.create);

objectsRoutes.get(
  '/:idSubCategory',
  celebrate({
    [Segments.PARAMS]: {
      idSubCategory: Joi.optional().default(''),
    },
  }),
  objectController.listByIdSubCategory,
);

export default  objectsRoutes;
