import { ApiProperty } from "@nestjs/swagger";

export class CreatePostDto {
    @ApiProperty({description: '标题名称'})
    title: string;

    @ApiProperty({description: '帖子内容'})
    content: string;
}