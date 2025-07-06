import { IsArray, IsDate, isDate, IsNotEmpty, IsString, IsUrl, ValidateNested } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

import { CreateTechnologyDTO } from '../../technologies/dtos/technology.dto';
import { CreateCategoryDTO } from '../../categories/dtos/category.dto';

export class CreateCertificateDTO {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Certificate's name` })
    name: string;

    @IsUrl()
    @IsNotEmpty()
    @ApiProperty({ description: `Certificate's PDF URL` })
    pdfUrl: string;

    @IsUrl()
    @IsNotEmpty()
    @ApiProperty({ description: `Certificate's image URL` })
    imgUrl: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ description: `Educational entity that provides the certificate` })
    entityName: string;

    @IsDate()
    @IsNotEmpty()
    @ApiProperty({ description: `Date that certificate was completed` })
    completed: Date;

    @IsNotEmpty()
    @ValidateNested()
    @Type(() => CreateCategoryDTO) 
    @ApiProperty({ description: `Category to which the certificate belongs: (Backend, Frontend, Cloud, Security, etc)` })
    category: CreateCategoryDTO

    @IsArray()
    @ValidateNested()
    @Type(() => CreateTechnologyDTO) 
    @ApiProperty({ description: `Technologies that were used during the course to obtain the certificate (Java, Javascript, TypeScript, etcs)` })
    technologies: CreateTechnologyDTO
}

export class UpdateCertificateDTO extends PartialType(CreateCertificateDTO) {}