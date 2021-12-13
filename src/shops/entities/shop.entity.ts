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

  @OneToOne(() => PaymentInfo)
  @JoinColumn()
  payment_info: PaymentInfo;
}

@Entity()
export class ShopSettings extends CoreEntity {
  @ManyToMany(() => ShopSocials)
  @JoinTable()
  socials: ShopSocials[];

  @Column()
  contact: string;

  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @Column()
  website: string;
}

@Entity()
export class Shop extends CoreEntity {
  @Column()
  owner_id: number;

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

  @OneToOne(() => Balance)
  @JoinColumn()
  balance?: Balance;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  description?: string;

  @OneToOne(() => Attachment)
  @JoinColumn()
  cover_image: Attachment;

  @OneToOne(() => Attachment)
  @JoinColumn()
  logo?: Attachment;

  @OneToOne(() => UserAddress)
  @JoinColumn()
  address: UserAddress;

  @OneToMany(() => Attribute, (attribute) => attribute.shop)
  attributes?: Attribute[];

  @OneToOne(() => Attachment)
  @JoinColumn()
  settings?: ShopSettings;
}
