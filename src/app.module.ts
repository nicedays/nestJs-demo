import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Student } from './entity/student';
import { UserModule } from './module/user/user.module';
import { User } from './entity/user';
import { StudentController } from './module/student/student.controller';
import { StudentService } from './module/student/student.service';
import { StudentModule } from './module/student/student.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '911520',
      database: 'test',
      entities: [Student, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Student, User]),
    UserModule,
    StudentModule, // 注册实体类
  ],
  controllers: [AppController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware) //应用中间件
      .exclude({ path: 'user', method: RequestMethod.POST }) //排除user的post方法
      .forRoutes('user'); //监听路径  参数：路径名或*，*是匹配所以的路由
    // .forRoutes({ path: 'user', method: RequestMethod.POST }, { path: 'album', method: RequestMethod.ALL }); //多个
    // .apply(UserMiddleware) //支持多个中间件
    // .forRoutes('user')
  }
}
