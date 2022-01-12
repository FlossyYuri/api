import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Type } from 'src/types/entities/type.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class Category extends CoreEntity {
  @Column()
  name: string;

  @Column()
  slug: string;

  @ManyToOne(() => Category, (category) => category.children)
  parent?: Category;

  @OneToMany(() => Category, (category) => category.parent)
  children?: Category[];

  @Column()
  details?: string;

  @OneToOne(() => Attachment)
  @JoinColumn()
  image?: Attachment;

  @Column()
  icon?: string;

  @ManyToOne(() => Type, (type) => type.categories)
  type?: Type;

  @ManyToMany(() => Product, (product) => product.categories)
  products?: Product[];
}
