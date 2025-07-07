import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateBoxDTO } from "./box.dto";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateAboutDTO {

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `About's title` })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `About' Description` })
  descriptions: string;

  @IsArray()
  @ValidateNested()
  @Type(() => CreateBoxDTO)
  @ApiProperty({ description: `Boxes to show in about section` })
  boxes: CreateBoxDTO[];
}

export class UpdateAboutDTO extends PartialType(CreateAboutDTO) { }
