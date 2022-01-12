import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Type } from 'src/types/entities/type.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity()
export class Tag extends CoreEntity {
  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  parent: number;

  @Column()
  details: string;

  @OneToOne(() => Attachment)
  @JoinColumn()
  image: Attachment;

  @ManyToOne(() => Type, (type) => type.tags)
  type?: Type;

  @Column()
  icon: string;

  @ManyToMany(() => Product, (product) => product.tags)
  @JoinTable()
  products: Product[];
}
