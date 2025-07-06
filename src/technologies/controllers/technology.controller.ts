import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTechnologyDTO, UpdateTechnologyDTO } from '../dtos/technology.dto';
import { TechnologyService } from '../services/technology.service';

@Controller('technologies')
export class TechnologyController {

    constructor(private technologyService: TechnologyService) { }

    @Get()
    findAll() {
        return this.technologyService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.technologyService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateTechnologyDTO) {
        return this.technologyService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateTechnologyDTO,
    ) {
        return this.technologyService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.technologyService.remove(+id);
    } private

}
