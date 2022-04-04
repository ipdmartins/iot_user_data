import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectAdvice } from './ObjectAdvice';

@Entity('advice')
class Advice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToMany(() => ObjectAdvice, objectAdvice => objectAdvice.advice, {
    cascade: true,
  })
  @JoinColumn({ name: 'id' })
  objectAdvices: ObjectAdvice[];

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

export { Advice };