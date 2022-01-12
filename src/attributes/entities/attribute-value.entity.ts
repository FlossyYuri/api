import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Attribute } from './attribute.entity';

@Entity()
export class AttributeValue extends CoreEntity {
  @Column()
  value: string;

  @Column()
  meta?: string;

  @ManyToOne(() => Attribute, (att) => att.values)
  attribute?: Attribute;

  @ManyToOne(() => Product, (product) => product.variations)
  product?: Product;
}
