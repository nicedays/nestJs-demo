
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Student } from 'src/entity/student';
import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { Repository } from 'typeorm';

@Controller('student')
@ApiTags("学生")
export class StudentController {
    constructor(
        private readonly studentService: StudentService
        ) {}
    //查找全部
  @Get('findAll')
  @ApiOperation({summary: '查找全部',description: '查找所有'})
  async findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  //保存
  @Post('save')
  @ApiOperation({summary: '保存',description: '保存'})
  async createUser(@Body() student: Student): Promise<Student> {
    console.log(student)
    return this.studentService.createUser(student);
  }

  //查找某一条
  @Get('findOne/:id')
  @ApiOperation({summary: '查找某一条',description: '查找某一条'})
  async findOne(@Param('id') id: number): Promise<Student> {
    return this.studentService.findOne(id);
  }

  //更新
  @Post('update')
  @ApiOperation({summary: '更新',description: '更新1'})
  async update(@Body() studentData: Student): Promise<Student> {
    return  this.studentService.update(studentData);
  }

  //插入一条
  @Post('updateOne')
  @ApiOperation({summary: '更新一条',description: '更新1条'})
  async insertOne(@Body() studentData: Student): Promise<any> {
    // let data = new Student();
    // data.name = studentData.name;
    // data.sex = studentData.sex;
    // data.age = studentData.age;
    return this.studentService.insertOne(studentData);
  }

  //删除
  @Post('delete')
  @ApiOperation({summary: '删除',description: '删除1'})
  async delete(@Body() userData: Student): Promise<any> {
      return this.studentService.delete(userData);
    
  }
}
