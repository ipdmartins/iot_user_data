import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import VulnerabilityController from '../controller/VulnerabilityController';

const vulnerabilitiesRoutes = Router();

const vulnerabilityController = VulnerabilityController.getInstance();

vulnerabilitiesRoutes.post('/', vulnerabilityController.create);

vulnerabilitiesRoutes.get('/', vulnerabilityController.index);

export default vulnerabilitiesRoutes;
