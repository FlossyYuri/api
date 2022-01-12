import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CoreEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column()
  created_at?: Date;
  @Column()
  updated_at?: Date;
}
