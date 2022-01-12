import { Address } from 'src/addresses/entities/address.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Refund } from 'src/refunds/entities/refund.entity';
// import { Order } from 'src/orders/entities/order.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Column, Entity, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User extends CoreEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password?: string;

  @OneToOne(() => Profile, {
    eager: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn()
  profile?: Profile;

  @OneToMany(() => Shop, (shop) => shop.owner)
  shops?: Shop[];

  // @OneToOne(() => Shop)
  // @JoinColumn()
  // managed_shop?: Shop;

  @Column()
  is_active?: boolean = true;

  @OneToMany(() => Address, (address) => address.customer, {
    cascade: ['insert', 'update'],
    eager: true,
  })
  address?: Address[];

  @OneToMany(() => Refund, (refund) => refund.customer)
  refunds?: Refund[];

  @OneToMany(() => Order, (order) => order.customer)
  orders?: Order[];
}
