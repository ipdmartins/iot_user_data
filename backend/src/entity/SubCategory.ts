import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './Category';
import { Objects } from './Object';

@Entity('sub_category')
class SubCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Category, category => category.sub_categorys)
  @JoinColumn({ name: 'id_category' })
  category: Category;

  @Column()
  id_category: string;

  @OneToMany(() => Objects, objects => objects.sub_category , { eager: true })
  @JoinColumn({ name: 'id' })
  objects: Objects[];

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { SubCategory };