import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CreateCategoryDTO, UpdateCategoryDTO } from '../dtos/category.dto';

@Controller('categories')
export class CategoryController {

    constructor(private categoriesService: CategoryService) { }

    @Get()
    findAll() {
        return this.categoriesService.findAll();
    }

    @Get(':id')
    get(@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.findOne(id);
    }

    @Post()
    create(@Body() payload: CreateCategoryDTO) {
        return this.categoriesService.create(payload);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() payload: UpdateCategoryDTO,
    ) {
        return this.categoriesService.update(id, payload);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.categoriesService.remove(+id);
    }


}
