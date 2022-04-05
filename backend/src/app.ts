import 'reflect-metadata';
import './shared/index'
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import { connectServerDB } from './config/db';
import objectsRoutes from './routes/objects.routes';
import advicesRoutes from './routes/advices.routes';
import attacksRoutes from './routes/attacks.routes';
import vulnerabilitiesRoutes from './routes/vulnerabilities.routes';
import categoriesRoutes from './routes/category.routes';
import subCategoriesRoutes from './routes/subCategory.routes';

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));

connectServerDB();

app.use('/object', objectsRoutes);
app.use('/advice', advicesRoutes);
app.use('/attack', attacksRoutes);
app.use('/vulnerability', vulnerabilitiesRoutes);
app.use('/category', categoriesRoutes);
app.use('/subcategory', subCategoriesRoutes);
