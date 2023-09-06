import { ApiProperty } from "@nestjs/swagger";

const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");


@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    @ApiProperty({description: '学生id'})
    id: number;

    @Column()
    @ApiProperty({description: '学生名称'})
    name: String;

    @Column()
    @ApiProperty({description: '学生性别'})
    sex: number;

    @Column()
    @ApiProperty({description: '学生年龄'})
    age: number
}