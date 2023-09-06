import { ApiProperty } from "@nestjs/swagger";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    @ApiProperty({description: '用户id'})
    userId: number;

    @Column()
    @ApiProperty({description: '用户名称'})
    userName: string;

    @Column()
    @ApiProperty({description: '密码'})
    userPassword: string;

    @Column()
    @ApiProperty({description: 'Email'})
    email: string

    @Column()
    @ApiProperty({description: '注册时间'})
    registerTime: string

    @Column()
    @ApiProperty({description: '手机号码'})
    phone: string

    @Column()
    @ApiProperty({description: '最后登录时间'})
    lastLoginTime: string

    @Column()
    @ApiProperty({description: '用户状态'})
    userStatus: number

    @Column()
    @ApiProperty({description: '用户权限'})
    auth: number
}