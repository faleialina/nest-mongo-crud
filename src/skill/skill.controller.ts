import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('/skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  async create(@Body() obj) {
    return await this.skillService.create(obj);
  }

  @Get()
  async getAll() {
    return await this.skillService.getAllItem();
  }

  @Get('/:id')
  async getById(@Param('id') id) {
    return await this.skillService.getById(id);
  }

  @Put('/:id')
  async update(@Param('id') id, @Body() obj) {
    return await this.skillService.putById(id, obj);
  }

  @Delete('/:id')
  async delete(@Param('id') id) {
    return await this.skillService.deleteById(id);
  }
}
