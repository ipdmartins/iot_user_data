import { Router } from 'express';
import multer from 'multer';
import { ObjectController } from '../modules/data/controllers/ObjectController';

const objectsRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const objectController = ObjectController.getInstance();


objectsRoutes.post('/', objectController.create);

export default  objectsRoutes;
