import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

export enum CouponType {
  FIXED_COUPON = 'fixed',
  PERCENTAGE_COUPON = 'percentage',
  FREE_SHIPPING_COUPON = 'free_shipping',
  DEFAULT_COUPON = 'fixed',
}

@Entity()
export class Coupon extends CoreEntity {
  @Column()
  code: string;

  @Column()
  description?: string;

  @OneToMany(() => Order, (order) => order.coupon)
  orders?: Order[];

  @Column()
  type: CouponType;

  @OneToOne(() => Attachment)
  @JoinColumn()
  image: Attachment;

  @Column()
  is_valid: boolean;

  @Column()
  amount: number;

  @Column()
  active_from: string;

  @Column()
  expire_at: string;
}
