import { User } from '@prisma/client';
export declare class UserEntity implements User {
    constructor(partial: Partial<UserEntity>);
    username: string;
    bio: string;
    emailVerified: Date;
    image: string;
    coverImage: string;
    profileImage: string;
    followingIds: string[];
    hasNotification: boolean;
    id: string;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    password: string;
}
