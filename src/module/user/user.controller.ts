import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user';
import { Repository } from 'typeorm';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //查找全部
  @Get('findAll')
  @ApiOperation({ summary: '查找全部用户', description: '查找所有用户' })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  //保存
  @Post('save')
  @ApiOperation({ summary: '保存用户', description: '保存' })
  createUser(@Body() User: User): Promise<User> {
    return this.userService.createUser(User);
  }

  //查找某一条
  @Get('findOne/:id')
  @ApiOperation({ summary: '查找某一条用户', description: '查找某一条' })
  findOne(@Param('id') id: number): Promise<User> {
    return this.userService.findOne(id);
  }

  //更新
  @Post('update')
  @ApiOperation({ summary: '更新用户', description: '更新1' })
  update(@Body() userData: User): Promise<User> {
    return this.userService.update(userData);
  }

  //插入一条
  @Post('updateOne')
  @ApiOperation({ summary: '插入一条用户', description: '更新1条' })
  insertOne(@Body() userData: User): Promise<any> {
    return this.userService.insertOne(userData);
  }

  //删除
  @Post('delete')
  @ApiOperation({ summary: '删除用户', description: '删除1' })
  delete(@Body() userData: User): Promise<any> {
    return this.userService.delete(userData);
  }
}
