import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { coursesProviders } from './courses.providers';
import { databaseProviders } from 'src/core/database/database.provider';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, ...coursesProviders, ...databaseProviders],
})
export class CoursesModule {}
