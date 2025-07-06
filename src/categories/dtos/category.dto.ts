import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Category's name` })
    name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Section where the category belongs (Certificate, Experience or Portfolio)` })
    section: string;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) { }

