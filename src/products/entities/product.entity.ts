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
  ManyToMany,
  JoinTable,
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
export class OrderProductPivot extends CoreEntity {
  @Column()
  variation_option_id?: number;
  @Column()
  order_quantity: number;
  @Column()
  unit_price: number;
  @Column()
  subtotal: number;
}
@Entity()
export class Product extends CoreEntity {
  @Column()
  name: string;

  @Column()
  slug: string;

  @ManyToOne(() => Type, (type) => type.products)
  type?: Type;

  @Column()
  product_type: ProductType;

  @ManyToMany(() => Category, (category) => category.products)
  @JoinTable()
  categories: Category[];

  @ManyToMany(() => Tag, (tag) => tag.products)
  tags?: Tag[];

  @OneToMany(() => AttributeValue, (av) => av.product)
  variations?: AttributeValue[];

  @OneToMany(() => Variation, (va) => va.product)
  variation_options?: Variation[];

  @OneToOne(() => OrderProductPivot)
  @JoinColumn()
  pivot?: OrderProductPivot;

  @ManyToOne(() => Order, (order) => order.products)
  orders?: Order[];

  @ManyToOne(() => Shop, (shop) => shop.products)
  shop: Shop;

  @ManyToOne(() => Product, (product) => product.id)
  related_products?: Product[];

  @OneToMany(() => Attachment, (attachment) => attachment.product)
  gallery?: Attachment[];

  @OneToOne(() => Attachment)
  @JoinColumn()
  image?: Attachment;

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

  @ManyToOne(() => Product, (product) => product.variations)
  product?: Product;

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
