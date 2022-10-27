import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CourseService } from './courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CourseService],
})
export class CoursesModule {}
