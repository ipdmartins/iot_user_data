import { Router } from 'express';
import objectsRoutes from './objects.routes';

const router = Router();

router.use('/objects', objectsRoutes);

export { router };