import { Router } from 'express';
import CategoryController from '../controller/CategoryController';

const categoriesRoutes = Router();

const categoryController = CategoryController.getInstance();

categoriesRoutes.post('/', categoryController.create);

categoriesRoutes.get('/', categoryController.index);


export default  categoriesRoutes;
