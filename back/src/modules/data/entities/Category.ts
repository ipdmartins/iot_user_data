import { v4 as uuidv4 } from 'uuid';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';
import { Objects } from './Object';

@Entity('category')
class Category {
  @PrimaryColumn()
  id?: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };