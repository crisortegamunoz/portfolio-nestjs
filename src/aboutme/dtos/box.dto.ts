import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBoxDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Box's title` })
    title: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Box's title` })
    description: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Box's css style` })
    cssStyle: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Box's icon` })
    iconImg: string;

    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ description: `Box's order` })
    order: number;
}

export class UpdateBoxDTO extends PartialType(CreateBoxDTO) { }
