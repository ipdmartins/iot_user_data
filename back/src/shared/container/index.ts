import { container } from 'tsyringe';
import { ObjectRepository } from '../../modules/data/repositories/implementations/ObjectRepository';
import { IObjectRepository } from '../../modules/data/repositories/IObjectRepository';

container.registerSingleton<IObjectRepository>(
    'ObjectRepository', ObjectRepository
);
