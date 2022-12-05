import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostsRepository } from './repository/posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PrismaService, PostsRepository],
})
export class PostsModule {}
