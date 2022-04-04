import { Router } from 'express';
import { ObjectController } from '../controller/ObjectController';

const objectsRoutes = Router();

const objectController = ObjectController.getInstance();

objectsRoutes.post('/', objectController.create);

export default  objectsRoutes;
