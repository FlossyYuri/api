import { AttributeValue } from 'src/attributes/entities/attribute-value.entity';
import { Category } from 'src/categories/entities/category.entity';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Order } from 'src/orders/entities/order.entity';
import { Shop } from 'src/shops/entities/shop.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Type } from 'src/types/entities/type.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
enum ProductStatus {
  PUBLISH = 'publish',
  DRAFT = 'draft',
}
enum ProductType {
  SIMPLE = 'simple',
  VARIABLE = 'variable',
}

@Entity()
export class Product extends CoreEntity {
  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  type_id: number;

  @Column()
  product_type: ProductType;

  categories: Category[];
  tags?: Tag[];
  variations?: AttributeValue[];
  variation_options?: Variation[];
  pivot?: OrderProductPivot;
  orders?: Order[];
  shop: Shop;
  related_products?: Product[];
  gallery?: Attachment[];
  image?: Attachment;

  @Column()
  shop_id: number;

  @Column()
  description: string;

  @Column()
  in_stock: boolean;

  @Column()
  is_taxable: boolean;

  @Column()
  sale_price?: number;

  @Column()
  max_price?: number;

  @Column()
  min_price?: number;

  @Column()
  sku?: string;

  @Column()
  status: ProductStatus;

  @Column()
  height?: string;

  @Column()
  length?: string;

  @Column()
  width?: string;

  @Column()
  price?: number;

  @Column()
  quantity: number;

  @Column()
  unit: string;
}

export class OrderProductPivot {
  variation_option_id?: number;
  order_quantity: number;
  unit_price: number;
  subtotal: number;
}

@Entity()
export class Variation extends CoreEntity {
  @Column()
  title: string;
  @Column()
  price: number;
  @Column()
  sku: string;
  @Column()
  is_disable: boolean;
  @Column()
  sale_price?: number;
  @Column()
  quantity: number;
  @OneToMany(() => VariationOption, (vo) => vo.variation)
  options: VariationOption[];
}

@Entity()
export class VariationOption extends CoreEntity {
  @Column()
  name: string;
  @Column()
  value: string;

  @ManyToOne(() => Variation, (va) => va.options)
  variation: Variation;
}
