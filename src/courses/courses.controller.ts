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
  create(@Body() body) {
    return this.coursesServices.create(body);
  }
  // Edição
  @Patch(':id')
  update(@Param(`id`) id: string, @Body() body) {
    return this.coursesServices.update(id, body);
  }

  @Delete(':id')
  destroy(@Param(`id`) id: string) {
    return this.coursesServices.destroy(id);
  }
}
