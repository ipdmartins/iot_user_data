import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import { ObjectController } from '../controller/ObjectController';

const objectsRoutes = Router();

const objectController = ObjectController.getInstance();

objectsRoutes.post('/', objectController.create);

objectsRoutes.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.optional().default(''),
    },
  }),
  objectController.showById,
);

objectsRoutes.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      name: Joi.optional().default(''),
      idSubCategory: Joi.optional().default(''),
    },
  }),
  objectController.listObjects,  
);


export default  objectsRoutes;
