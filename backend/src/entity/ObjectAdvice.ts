import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Objects } from './Object';
import { Advice } from './Advice';

@Entity('object_advice')
class ObjectAdvice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Objects, objects => objects.objectAdvices)
  @JoinColumn({ name: 'id_object' })
  object: Objects;

  @Column()
  id_object: string;

  @ManyToOne(() => Advice, advice => advice.objectAdvices)
  @JoinColumn({ name: 'id_advice' })
  advice: Advice;

  @Column()
  id_advice: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }

}

export { ObjectAdvice };