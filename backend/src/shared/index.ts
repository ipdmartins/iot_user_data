import { container } from 'tsyringe';
import { IAdviceRepository } from '../repositories/IAdviceRepository';
import { IAttackRepository } from '../repositories/IAttackRepository';
import { ICategoryRepository } from '../repositories/ICategoryRepository';
import { AdviceRepository } from '../repositories/implementations/AdviceRepository';
import { AttackRepository } from '../repositories/implementations/AttackRepository';
import { CategoryRepository } from '../repositories/implementations/CategoryRepository';
import { ObjectAdviceRepository } from '../repositories/implementations/ObjectAdviceRepository';
import { ObjectAttackRepository } from '../repositories/implementations/ObjectAttackRepository';
import { ObjectRepository } from '../repositories/implementations/ObjectRepository';
import { ObjectVulnerabilityRepository } from '../repositories/implementations/ObjectVulnerabilityRepository';
import { SubCategoryRepository } from '../repositories/implementations/SubCategoryRepository';
import { VulnerabilityRepository } from '../repositories/implementations/VulnerabilityRepository';
import { IObjectAdviceRepository } from '../repositories/IObjectAdviceRepository';
import { IObjectAttackRepository } from '../repositories/IObjectAttackRepository';
import { IObjectRepository } from '../repositories/IObjectRepository';
import { IObjectVulnerabilityRepository } from '../repositories/IObjectVulnerabilityRepository';
import { ISubCategoryRepository } from '../repositories/ISubCategoryRepository';
import { IVulnerabilityRepository } from '../repositories/IVulnerabilityRepository';

container.registerSingleton<IObjectRepository>(
  'ObjectRepository', ObjectRepository
);

container.registerSingleton<IAdviceRepository>(
  'AdviceRepository', AdviceRepository
);

container.registerSingleton<IAttackRepository>(
  'AttackRepository', AttackRepository
);

container.registerSingleton<IVulnerabilityRepository>(
  'VulnerabilityRepository', VulnerabilityRepository
);

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository', CategoryRepository
);

container.registerSingleton<ISubCategoryRepository>(
  'SubCategoryRepository', SubCategoryRepository
);

container.registerSingleton<IObjectAdviceRepository>(
  'ObjectAdviceRepository', ObjectAdviceRepository
);

container.registerSingleton<IObjectAttackRepository>(
  'ObjectAttackRepository', ObjectAttackRepository
);

container.registerSingleton<IObjectVulnerabilityRepository>(
  'ObjectVulnerabilityRepository', ObjectVulnerabilityRepository
);
