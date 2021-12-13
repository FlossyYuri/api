import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Setting extends CoreEntity {
  options: SettingsOptions;
}

@Entity()
export class Location extends CoreEntity {
  @Column()
  lat: number;
  @Column()
  lng: number;
  @Column()
  city?: string;
  @Column()
  state: string;
  @Column()
  country: string;
  @Column()
  zip?: string;
  @Column()
  formattedAddress: string;
}
@Entity()
export class SeoSettings extends CoreEntity {
  @Column()
  metaTitle?: string;

  @Column()
  metaDescription?: string;

  @Column()
  ogTitle?: string;

  @Column()
  ogDescription?: string;

  @OneToOne(() => Attachment)
  @JoinColumn()
  ogImage?: Attachment;

  @Column()
  twitterHandle?: string;

  @Column()
  twitterCardType?: string;

  @Column()
  metaTags?: string;

  @Column()
  canonicalUrl?: string;
}

@Entity()
export class GoogleSettings extends CoreEntity {
  @Column()
  isEnable: boolean;
  @Column()
  tagManagerId: string;
}

@Entity()
export class FacebookSettings extends CoreEntity {
  @Column()
  isEnable: boolean;
  @Column()
  appId: string;
  @Column()
  pageId: string;
}

@Entity()
export class ContactDetails extends CoreEntity {
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
export class ShopSocials extends CoreEntity {
  @Column()
  icon: string;
  @Column()
  url: string;
}

@Entity()
export class SettingsOptions extends CoreEntity {
  @Column()
  siteTitle: string;

  @Column()
  siteSubtitle: string;

  @Column()
  currency: string;

  @Column()
  minimumOrderAmount: number;

  @Column()
  walletToCurrencyRatio: number;

  @Column()
  signupPoints: number;

  @ManyToMany(() => DeliveryTime)
  @JoinTable()
  deliveryTime: DeliveryTime[];

  @OneToOne(() => Attachment)
  @JoinColumn()
  logo: Attachment;

  @Column()
  taxClass: string;

  @Column()
  shippingClass: string;

  @OneToOne(() => SeoSettings)
  @JoinColumn()
  seo: SeoSettings;

  @OneToOne(() => GoogleSettings)
  @JoinColumn()
  google?: GoogleSettings;

  @OneToOne(() => FacebookSettings)
  @JoinColumn()
  facebook?: FacebookSettings;

  @OneToOne(() => ContactDetails)
  @JoinColumn()
  contactDetails: ContactDetails;
}

@Entity()
export class DeliveryTime extends CoreEntity {
  @Column()
  title: string;
  @Column()
  description: string;
}
