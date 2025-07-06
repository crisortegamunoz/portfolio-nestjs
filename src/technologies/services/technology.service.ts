import { Injectable, NotFoundException } from '@nestjs/common';
import { Technology } from '../entities/technology.entity';
import { CreateTechnologyDTO, UpdateTechnologyDTO } from '../dtos/technology.dto';

@Injectable()
export class TechnologyService {
    private counterId = 1;

    private technologies: Technology[] = [
        {
            id: 1,
            name: 'Java',
            version: '17'
        },
    ];

    findAll() {
        return this.technologies;
    }

    findOne(id: number) {
        const technology = this.technologies.find((item) => item.id === id);
        if (!technology) {
            throw new NotFoundException(`Technology #${id} not found`);
        }
        return technology;
    }

    create(data: CreateTechnologyDTO) {
        this.counterId = this.counterId + 1;
        const newTechnology = {
            id: this.counterId,
            ...data,
        };
        this.technologies.push(newTechnology);
        return newTechnology;
    }

    update(id: number, changes: UpdateTechnologyDTO) {
        const technology = this.findOne(id);
        const index = this.technologies.findIndex((item) => item.id === id);
        this.technologies[index] = {
            ...technology,
            ...changes,
        };
        return this.technologies[index];
    }

    remove(id: number) {
        const index = this.technologies.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Technology #${id} not found`);
        }
        this.technologies.splice(index, 1);
        return true;
    }

}
