import { Injectable, NotFoundException } from '@nestjs/common';

import { Certificate } from '../entities/certificate.entity';
import { CreateCertificateDTO, UpdateCertificateDTO } from '../dtos/certificate.dto';

@Injectable()
export class CertificateService {

    private counterId = 1;

    private certificates: Certificate[] = [
        {
            id: 1,
            name: 'Category 1',
            pdfUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2025%2F2025-07-03_NestJS_Modular.pdf?alt=media&token=2add0d00-4ea9-431b-887f-9b312afa9cdc',
            imgUrl: 'https://firebasestorage.googleapis.com/v0/b/cms-portfolio-firebase.appspot.com/o/images%2Fcertificate%2Fcrisortega%2F2025%2F2025-07-03_NestJS_Modular.jpg?alt=media&token=8f4d1956-f807-400d-9d26-7051a67c781f',
            entityName: '',
            completed: new Date(),
            category: {
                id: 1,
                name: 'Category 1',
                section: 'test'
            },
            technologies: [
                {
                    id: 1,
                    name: 'Java',
                    version: '17'
                }
            ]
        },
    ];

    findAll() {
        return this.certificates;
    }

    findOne(id: number) {
        const certificate = this.certificates.find((item) => item.id === id);
        if (!certificate) {
            throw new NotFoundException(`Certificate #${id} not found`);
        }
        return certificate;
    }

    create(data: CreateCertificateDTO) {
        this.counterId = this.counterId + 1;
        const newCertificate: Certificate = {
            id: this.counterId,
            name: data.name,
            pdfUrl: data.pdfUrl,
            imgUrl: data.imgUrl,
            entityName: data.entityName,
            completed: data.completed,
            category: {
                id: 1,
                name: 'Category 1',
                section: 'test'
            },
            technologies: [{
                id: 1,
                name: 'Java',
                version: '17'
            }],
        };
        this.certificates.push(newCertificate);
        return newCertificate;
    }

    update(id: number, changes: UpdateCertificateDTO) {
        const certificate = this.findOne(id);
        const index = this.certificates.findIndex((item) => item.id === id);
        this.certificates[index] = {
            ...certificate,
            name: changes.name ?? certificate.name,
            pdfUrl: changes.pdfUrl ?? certificate.pdfUrl,
            imgUrl: changes.imgUrl ?? certificate.imgUrl,
            entityName: changes.entityName ?? certificate.entityName,
            completed: changes.completed ?? certificate.completed,
            category: changes.category
                ? {
                    id: 1,
                    name: 'Category 1',
                    section: 'test'
                }
                : certificate.category,

            technologies: changes.technologies
                ? [{
                    id: 1,
                    name: 'Java',
                    version: '17'
                }]
                : certificate.technologies
        };
        return this.certificates[index];
    }

    remove(id: number) {
        const index = this.certificates.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Certificate #${id} not found`);
        }
        this.certificates.splice(index, 1);
        return true;
    }

}
