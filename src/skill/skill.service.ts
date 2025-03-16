import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Skill } from 'src/schemas/skill.schema';

@Injectable()
export class SkillService {
  constructor(
    @InjectModel('skill') private readonly skillModel: Model<Skill>,
  ) {}
  create(obj) {
    return this.skillModel.create(obj);
  }
  getAllItem() {
    return this.skillModel.find();
  }

  getById(id) {
    return this.skillModel.findById(id);
  }

  deleteById(id) {
    return this.skillModel.findByIdAndDelete(id);
  }

  putById(id, obj) {
    return this.skillModel.findByIdAndUpdate(id, obj);
  }
}
