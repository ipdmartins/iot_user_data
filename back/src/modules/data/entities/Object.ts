import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Attack } from './Attack';
import { Advice } from './Advice';
import { Vulnerability } from './Vulnerability';
import { Category } from './Category';

@Entity('object')
class Objects {
  @PrimaryColumn()
  id?: string;

  @OneToMany(() => Vulnerability, vulnerability => vulnerability.object, { eager: true })
  @JoinColumn({ name: 'id' })
  vulnerabilities: Vulnerability[];

  @OneToMany(() => Attack, attack => attack.object, { eager: true })
  @JoinColumn({ name: 'id' })
  attacks: Attack[];

  @OneToMany(() => Advice, advice => advice.object, { eager: true })
  @JoinColumn({ name: 'id' })
  advices: Advice[];

  @OneToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'id_category' })
  category: Category;

  @Column()
  name: string;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Objects };