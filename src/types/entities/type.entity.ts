import { Category } from 'src/categories/entities/category.entity';
import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Product } from 'src/products/entities/product.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';

@Entity()
export class TypeSettings extends CoreEntity {
  @Column()
  isHome: boolean;
  @Column()
  layoutType: string;
  @Column()
  productCard: string;
}
@Entity()
export class Type extends CoreEntity {
  @Column()
  name: string;
  @Column()
  slug: string;
  @OneToOne(() => Attachment)
  @JoinColumn()
  image: Attachment;
  @Column()
  icon: string;
  @OneToMany(() => Banner, (banner) => banner.type)
  banners?: Banner[];
  @OneToMany(() => Attachment, (promo) => promo.promo_type)
  promotional_sliders?: Attachment[];

  @OneToMany(() => Category, (categories) => categories.type)
  categories?: Category[];

  @OneToMany(() => Product, (product) => product.type)
  products?: Product[];

  @OneToMany(() => Tag, (tag) => tag.type)
  tags?: Tag[];

  @OneToOne(() => TypeSettings)
  @JoinColumn()
  settings?: TypeSettings;
}

@Entity()
export class Banner extends CoreEntity {
  @Column()
  id: number;
  @Column()
  title?: string;
  @Column()
  description?: string;

  @ManyToOne(() => Type, (type) => type.banners)
  type: Type;

  @OneToOne(() => Attachment)
  @JoinColumn()
  image: Attachment;
}
