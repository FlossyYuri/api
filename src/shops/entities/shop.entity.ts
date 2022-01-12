import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { UserAddress } from 'src/addresses/entities/address.entity';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Location, ShopSocials } from 'src/settings/entities/setting.entity';
import { User } from 'src/users/entities/user.entity';
import { Attribute } from 'src/attributes/entities/attribute.entity';
import { Product } from 'src/products/entities/product.entity';
import { Withdraw } from 'src/withdraws/entities/withdraw.entity';
import { Refund } from 'src/refunds/entities/refund.entity';
import { Order } from 'src/orders/entities/order.entity';

@Entity()
export class PaymentInfo extends CoreEntity {
  @Column()
  account: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  bank: string;
}

@Entity()
export class Balance extends CoreEntity {
  @Column()
  admin_commission_rate: number;

  @Column()
  total_earnings: number;

  @Column()
  withdrawn_amount: number;

  @Column()
  current_balance: number;

  @OneToOne(() => PaymentInfo, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  payment_info: PaymentInfo;
}

@Entity()
export class ShopSettings extends CoreEntity {
  @ManyToMany(() => ShopSocials, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinTable()
  socials: ShopSocials[];

  @Column()
  contact: string;

  @OneToOne(() => Location, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  location: Location;

  @Column()
  website: string;
}

@Entity()
export class Shop extends CoreEntity {
  @ManyToOne(() => User, (user) => user.shops)
  owner: User;

  @ManyToMany(() => User)
  @JoinTable()
  staffs?: User[];

  @Column()
  is_active: boolean;

  @Column()
  orders_count: number;

  @Column()
  products_count: number;

  @OneToOne(() => Balance, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  balance?: Balance;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  description?: string;

  @OneToOne(() => Attachment, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  cover_image: Attachment;

  @OneToOne(() => Attachment, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  logo?: Attachment;

  @OneToOne(() => UserAddress, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  address: UserAddress;

  @OneToMany(() => Attribute, (attribute) => attribute.shop)
  attributes?: Attribute[];

  @OneToOne(() => ShopSettings, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  settings?: ShopSettings;

  @OneToMany(() => Product, (product) => product.shop)
  products?: Product[];

  @OneToMany(() => Withdraw, (withdraw) => withdraw.shop)
  withdraws?: Withdraw[];

  @OneToMany(() => Refund, (refund) => refund.shop)
  refunds?: Refund[];

  @OneToMany(() => Order, (order) => order.shop)
  orders?: Order[];
}
