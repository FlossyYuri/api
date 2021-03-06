import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Type } from 'src/types/entities/type.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class Attachment extends CoreEntity {
  @Column()
  thumbnail?: string;
  @Column()
  original?: string;

  @ManyToOne(() => Type, (type) => type.promotional_sliders)
  promo_type?: Type;

  @ManyToOne(() => Product, (product) => product.gallery)
  product?: Product;
}
