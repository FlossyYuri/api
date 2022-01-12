import { UserAddress } from 'src/addresses/entities/address.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Coupon } from 'src/coupons/entities/coupon.entity';
import { Product } from 'src/products/entities/product.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { OrderStatus } from './order-status.entity';
export enum PaymentGatewayType {
  STRIPE = 'stripe',
  CASH_ON_DELIVERY = 'cod',
}

@Entity()
export class Order extends CoreEntity {
  @Column()
  tracking_number: string;

  @Column()
  customer_contact: string;

  @ManyToOne(() => User, (user) => user.orders)
  customer: User;

  @ManyToOne(() => Order, (order) => order.children)
  parent_order?: Order;

  @OneToMany(() => Order, (order) => order.parent_order)
  children: Order[];

  @OneToOne(() => OrderStatus)
  @JoinColumn()
  status: OrderStatus;

  @Column()
  amount: number;

  @Column()
  sales_tax: number;

  @Column()
  total: number;

  @Column()
  paid_total: number;

  @Column()
  payment_id?: string;

  @Column()
  payment_gateway: PaymentGatewayType;

  @ManyToOne(() => Coupon, (coupon) => coupon.orders)
  coupon?: Coupon;

  @ManyToOne(() => Shop, (shop) => shop.orders)
  shop: Shop;

  @Column()
  discount?: number;

  @Column()
  delivery_fee: number;

  @Column()
  delivery_time: string;

  @OneToMany(() => Product, (product) => product.orders)
  products: Product[];

  @OneToOne(() => UserAddress)
  @JoinColumn()
  billing_address: UserAddress;

  @OneToOne(() => UserAddress)
  @JoinColumn()
  shipping_address: UserAddress;
}
