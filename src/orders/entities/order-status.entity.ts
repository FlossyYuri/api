import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class OrderStatus extends CoreEntity {
  @Column()
  name: string;
  @Column()
  color: string;
  @Column()
  serial: number;
}
