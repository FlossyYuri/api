import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

export enum RefundStatus {
  APPROVED = 'Approved',
  PENDING = 'Pending',
  REJECTED = 'Rejected',
  PROCESSING = 'Processing',
}

@Entity()
export class Refund extends CoreEntity {
  @Column()
  amount: string;

  @Column()
  status: RefundStatus;

  @ManyToOne(() => Shop, (shop) => shop.refunds)
  shop: Shop;

  @OneToOne(() => Order)
  @JoinColumn()
  order: Order;

  @ManyToOne(() => User, (user) => user.refunds)
  customer: User;
}
