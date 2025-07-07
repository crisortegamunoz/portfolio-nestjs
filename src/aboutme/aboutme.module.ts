import { Module } from '@nestjs/common';
import { AboutmeController } from './controller/aboutme.controller';
import { BoxController } from './controller/box.controller';
import { AboutmeService } from './service/aboutme.service';
import { BoxService } from './service/box.service';

@Module({
  controllers: [AboutmeController, BoxController],
  providers: [AboutmeService, BoxService]
})
export class AboutmeModule {}
