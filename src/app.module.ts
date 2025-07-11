import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environments } from './commons/config/environments';
import { CategoriesModule } from './categories/categories.module';
import { TechnologiesModule } from './technologies/technologies.module';
import { CertificatesModule } from './certificates/certificates.module';
import { AboutmeModule } from './aboutme/aboutme.module';
import config from './config';

const env = process.env.NODE_ENV ?? '.env';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[env],
      isGlobal: true,
      load: [config],
      validationSchema: Joi.object({
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required()
      })
    }),
    HttpModule,
    CategoriesModule,
    TechnologiesModule,
    CertificatesModule,
    AboutmeModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
