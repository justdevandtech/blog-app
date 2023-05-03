import { ApiProperty } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';
export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
  @ApiProperty()
  username: string;

  @ApiProperty()
  bio: string;

  @ApiProperty()
  emailVerified: Date;

  @ApiProperty()
  image: string;

  @ApiProperty()
  coverImage: string;

  @ApiProperty()
  profileImage: string;

  @ApiProperty()
  followingIds: string[];

  @ApiProperty()
  hasNotification: boolean;

  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;
}
