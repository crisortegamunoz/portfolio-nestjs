import { Module } from '@nestjs/common';
import { TechnologyController } from './controllers/technology.controller';
import { TechnologyService } from './services/technology.service';

@Module({
  controllers: [TechnologyController],
  providers: [TechnologyService]
})
export class TechnologiesModule {}
