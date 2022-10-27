import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CourseService } from './courses.service';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesServices: CourseService) {}

  @Get('') // @Get('list') sub rota
  findAll() {
    return this.coursesServices.findAll();
  }
  //  Parametros dinamicos
  @Get(':id')
  findOne(@Param(`id`) id: string) {
    return this.coursesServices.findOne(id);
  }

  // Capturando POST
  @Post()
  //   @HttpCode(204)
  create(@Body() CreateCourseDto: CreateCourseDto) {
    return this.coursesServices.create(CreateCourseDto);
  }
  // Edição
  @Patch(':id')
  update(@Param(`id`) id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.coursesServices.update(id, updateCourseDto);
  }

  @Delete(':id')
  destroy(@Param(`id`) id: string) {
    return this.coursesServices.destroy(id);
  }
}
