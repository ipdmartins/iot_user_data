import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Objects } from './Object';
import { Attack } from './Attack';

@Entity('object_attack')
class ObjectAttack {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Objects, objects => objects.objectAttacks)
  @JoinColumn({ name: 'id_object' })
  object: Objects;

  @Column()
  id_object: string;

  @ManyToOne(() => Attack, attack => attack.objectAttacks)
  @JoinColumn({ name: 'id_attack' })
  attack: Attack;

  @Column()
  id_attack: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

}

export { ObjectAttack };