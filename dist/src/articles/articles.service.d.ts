import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class ArticlesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createArticleDto: CreateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Article[]>;
    findDrafts(): import(".prisma/client").Prisma.PrismaPromise<import(".prisma/client").Article[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article & {
        user: import(".prisma/client").User;
    }, never>;
    update(id: number, updateArticleDto: UpdateArticleDto): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__ArticleClient<import(".prisma/client").Article, never>;
}
