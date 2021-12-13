import { Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { CoreEntity } from 'src/common/entities/core.entity';
import { User } from 'src/users/entities/user.entity';

export enum AddressType {
  BILLING = 'billing',
  SHIPPING = 'shipping',
}

@Entity()
export class UserAddress extends CoreEntity {
  @Column()
  street_address: string;
  @Column()
  country: string;
  @Column()
  city: string;
  @Column()
  state: string;
  @Column()
  zip: string;
}

@Entity()
export class Address extends CoreEntity {
  @Column()
  title: string;

  @Column()
  default: boolean;

  @OneToOne(() => UserAddress)
  @JoinColumn()
  address: UserAddress;

  @Column()
  type: AddressType;

  @ManyToOne(() => User, (user) => user.address)
  customer: User;
}
