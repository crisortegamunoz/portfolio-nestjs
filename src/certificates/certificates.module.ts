import { Module } from '@nestjs/common';
import { CertificateService } from './services/certificate.service';
import { CertificateController } from './controllers/certificate.controller';

@Module({
  providers: [CertificateService],
  controllers: [CertificateController]
})
export class CertificatesModule {}
