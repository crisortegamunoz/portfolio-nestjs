import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CertificateService } from '../services/certificate.service';
import { CreateCertificateDTO, UpdateCertificateDTO } from '../dtos/certificate.dto';

@Controller('certificates')
export class CertificateController {
    
    constructor(private certificatesService: CertificateService) { }

    @Get()
    findAll() {
        return this.certificatesService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.certificatesService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateCertificateDTO) {
        return this.certificatesService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateCertificateDTO,
    ) {
        return this.certificatesService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.certificatesService.remove(+id);
    }

}
