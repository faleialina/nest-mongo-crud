import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SkillModule } from './skill/skill.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    UserModule,
    SkillModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-app'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
