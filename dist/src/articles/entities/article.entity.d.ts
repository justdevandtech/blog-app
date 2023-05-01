import { Article } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';
export declare class ArticleEntity implements Article {
    id: number;
    title: string;
    description: string | null;
    body: string;
    published: boolean;
    createdAt: Date;
    updatedAt: Date;
    userId: number;
    user?: UserEntity;
    constructor({ user, ...data }: Partial<ArticleEntity>);
}
