import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Category } from './Category';
import { SubCategory } from './SubCategory';
import { ObjectVulnerability } from './ObjectVulnerability';
import { ObjectAdvice } from './ObjectAdvice';
import { ObjectAttack } from './ObjectAttack';

@Entity('object')
class Objects {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => SubCategory, subCategory => subCategory.objects)
  @JoinColumn({ name: 'id_sub_category' })
  sub_category: SubCategory;

  @Column({nullable: true})
  id_sub_category: string;

  @OneToMany(() => ObjectVulnerability, objectVulnerability => objectVulnerability.object, {
    cascade: true,
  })
  @JoinColumn({ name: 'id' })
  objectVulnerabilitys: ObjectVulnerability[];

  @OneToMany(() => ObjectAdvice, objectAdvice => objectAdvice.object, {
    cascade: true,
  })
  @JoinColumn({ name: 'id' })
  objectAdvices: ObjectAdvice[];

  @OneToMany(() => ObjectAttack, objectAttack => objectAttack.object, {
    cascade: true,
  })
  @JoinColumn({ name: 'id' })
  objectAttacks: ObjectAttack[];

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({nullable: true})
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

}

export { Objects };