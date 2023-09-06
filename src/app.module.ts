import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './entity/student';
import { UserController } from './module/user/user.controller';
import { UserService } from './module/user/user.service';
import { UserModule } from './module/user/user.module';
import { User } from './entity/user';
import { StudentController } from './module/student/student.controller';
import { StudentService } from './module/student/student.service';
import { StudentModule } from './module/student/student.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '911520',
      database: 'test',
      entities: [Student,User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Student,User]),
    UserModule,
    StudentModule, // 注册实体类
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService, ],
})
export class AppModule {}
