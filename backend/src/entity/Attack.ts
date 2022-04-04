import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectAttack } from './ObjectAttack';

@Entity('attack')
class Attack {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => ObjectAttack, objectAttack => objectAttack.attack, {
    cascade: true,
  })
  @JoinColumn({ name: 'id' })
  objectAttacks: ObjectAttack[];

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

export { Attack };