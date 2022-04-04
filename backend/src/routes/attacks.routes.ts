import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import AttackController from '../controller/AttackController';

const attacksRoutes = Router();

const attackController = AttackController.getInstance();

attacksRoutes.post('/', attackController.create);

attacksRoutes.get('/', attackController.index);

export default attacksRoutes;
