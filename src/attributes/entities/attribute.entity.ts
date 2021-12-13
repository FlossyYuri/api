import { CoreEntity } from 'src/common/entities/core.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AttributeValue } from './attribute-value.entity';

@Entity()
export class Attribute extends CoreEntity {
  @Column()
  name: string;

  @ManyToOne(() => Shop, (shop) => shop.attributes)
  shop: Shop;

  @Column()
  slug: string;

  @OneToMany(() => AttributeValue, (att) => att.attribute)
  values: AttributeValue[];
}
