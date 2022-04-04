import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import AdviceController from '../controller/AdviceController';

const advicesRoutes = Router();

const adviceController = AdviceController.getInstance();

advicesRoutes.post('/', adviceController.create);

advicesRoutes.get('/', adviceController.index);

advicesRoutes.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.optional().default(''),
    },
  }),
  adviceController.delete,
);


export default advicesRoutes;
