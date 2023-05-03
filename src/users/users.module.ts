import { Module } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  controllers: [UsersController],
  providers: [UserService, PrismaService],
  exports: [UserService],
})
export class UsersModule {}
