import { Module } from '@nestjs/common';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [ CoursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
