import { Attachment } from 'src/common/entities/attachment.entity';
import { CoreEntity } from 'src/common/entities/core.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile extends CoreEntity {
  @OneToOne(() => Attachment)
  @JoinColumn()
  avatar?: Attachment;

  @Column()
  bio?: string;

  @OneToMany(() => Social, (social) => social.profile)
  socials?: Social[];

  @Column()
  contact?: string;

  @OneToOne(() => User, (user) => user.address)
  user?: User;
}

@Entity()
export class Social extends CoreEntity {
  @Column()
  type: string;
  @Column()
  link: string;
  @ManyToOne(() => Profile, (profile) => profile.socials)
  profile: Profile;
}
