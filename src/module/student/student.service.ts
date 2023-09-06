import { Body, Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/entity/student';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) {

    }
    //查找全部
    async findAll(): Promise<Student[]> {
        return await this.studentRepository.find();
    }

    //保存
    async createUser(@Body() student: Student): Promise<Student> {
        console.log(student)
        return await this.studentRepository.save(student);
    }

    //查找某一条
    async findOne(@Param('id') id: number): Promise<Student> {
        return await this.studentRepository.findOneBy({
            id: id
        });
    }

    //更新
    async update(@Body() studentData: Student): Promise<Student> {
        await this.studentRepository.update(studentData.id, studentData);
        return await this.studentRepository.findOneBy({
            id: studentData.id
        });
    }

    //插入一条
    async insertOne(@Body() studentData: Student): Promise<any> {
        await this.studentRepository.insert(studentData);
        return await this.studentRepository.findOneBy({
            id: studentData.id
        });
    }

    //删除
    async delete(@Body() userData: Student): Promise<any> {
        return await this.studentRepository.remove(userData);
    }
}
