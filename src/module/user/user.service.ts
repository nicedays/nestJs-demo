import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  //保存
  async createUser(student: User): Promise<User> {
    console.log(student);
    return await this.userRepository.save(student);
  }

  //查找某一条
  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({
      userId: id,
    });
  }

  //更新
  async update(userData: User): Promise<User> {
    await this.userRepository.update(userData.userId, userData);
    return await this.userRepository.findOneBy({
      userId: userData.userId,
    });
  }

  //插入一条
  async insertOne(userData: User): Promise<any> {
    // let data = new Student();
    // data.name = studentData.name;
    // data.sex = studentData.sex;
    // data.age = studentData.age;
    await this.userRepository.insert(userData);
    return await this.userRepository.findOneBy({
      userId: userData.userId,
    });
  }

  //删除
  async delete(userData: User): Promise<any> {
    try {
      return await this.userRepository.remove(userData);
    } catch (err) {
      return err;
    }
  }
}
