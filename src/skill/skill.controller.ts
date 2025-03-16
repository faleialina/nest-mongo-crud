import { Body, Controller, Post } from '@nestjs/common';
import { SkillService } from './skill.service';

@Controller('/skill')
export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post()
  async create(@Body() obj) {
    return await this.skillService.create(obj);
  }
}
