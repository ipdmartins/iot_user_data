import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { SubCategory } from './SubCategory';

@Entity('category')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => SubCategory, subCategory => subCategory.category , { eager: true })
  @JoinColumn({ name: 'id' })
  sub_categorys: SubCategory[];

  @Column()
  name: string;

  @Column()
  description?: string;

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

export { Category };