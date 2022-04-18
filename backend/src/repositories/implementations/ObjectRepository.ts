import { getRepository, Repository } from 'typeorm';
import { Objects } from '../../entity/Object';
import { ICreateObjectDTO, IObjectRepository } from '../IObjectRepository';

class ObjectRepository implements IObjectRepository {
  private repository: Repository<Objects>; // ??????

  constructor() {
    this.repository = getRepository(Objects);
  }

  public async create(data: ICreateObjectDTO): Promise<Objects> {
    const object = await this.repository.create(data);

    return this.repository.save(object);
  }

  public async showById(id: string): Promise<Objects> {
    // const object = await this.repository
    //   .createQueryBuilder('object')
    //   .innerJoinAndSelect('object.objectVulnerabilitys', 'objectVulnerabilitys')
    //   .innerJoinAndSelect('object.objectAdvices', 'objectAdvices')
    //   .innerJoinAndSelect('object.objectAttacks', 'objectAttacks')
    //   .where('object.id =:id', {
    //     id,
    //   })
    //   .getOne();

    const object = await this.repository.query(
      ` select 
        ob.id as id,
        ob.id_sub_category as idSubCategory,
        ob."name" as objectName,
        ob.description as description,
        ob.image as image,
        ad.id as idAdvice,
        ad.description as descAdvice,
        ata.id as idAttack,
        ata.description as descAttack,
        vu.id as idVuln,
        vu.description as descVuln
        from "object" ob
        inner join object_advice oa on ob.id = oa.id_object 
        inner join advice ad on oa.id_advice = ad.id 
        inner join object_attack oa2  on ob.id = oa2.id_object 
        inner join attack ata on oa2.id_attack = ata.id
        inner join object_vulnerability ov on ob.id = ov.id_object 
        inner join vulnerability vu on ov.id_vulnerability = vu.id 
        where ob.id = '${id}'
      `
    )

    return object;
  }

  public async showByName(name: string): Promise<Objects | undefined> {
    const object = await this.repository
      .createQueryBuilder('object')
      .where('object.name = :name', {
        name,
      })
      .getOne();

    return object;
  }

  public async listByName(name: string): Promise<Objects[]> {
    const object = await this.repository
      .createQueryBuilder('object')
      .innerJoinAndSelect('object.objectVulnerabilitys', 'objectVulnerabilitys')
      .innerJoinAndSelect('object.objectAdvices', 'objectAdvices')
      .innerJoinAndSelect('object.objectAttacks', 'objectAttacks')
      .where('object.name LIKE :name', {
        name: `%${name}%`,
      })
      .getMany();

    return object;
  }

  public async listByIdSubCategory(idSubCategory: string): Promise<Objects[]> {
    console.log();
    
    const object = await this.repository
      .createQueryBuilder('object')
      .innerJoinAndSelect('object.objectVulnerabilitys', 'objectVulnerabilitys')
      .innerJoinAndSelect('object.objectAdvices', 'objectAdvices')
      .innerJoinAndSelect('object.objectAttacks', 'objectAttacks')
      .where('object.id_sub_category = :idSubCategory', {
        idSubCategory,
      })
      .getMany();

    return object;
  }

  public async update(data: ICreateObjectDTO): Promise<Objects> {
    throw new Error('Method not implemented.');
  }
  public async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

}

export { ObjectRepository };
