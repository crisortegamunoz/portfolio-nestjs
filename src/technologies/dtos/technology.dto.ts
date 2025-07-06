import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTechnologyDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Technology's name` })

    name: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Technology's version` })
    version: string;
}

export class UpdateTechnologyDTO extends PartialType(CreateTechnologyDTO) { }
