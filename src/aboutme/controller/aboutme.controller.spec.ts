import { Test, TestingModule } from '@nestjs/testing';
import { AboutmeController } from './aboutme.controller';

describe('AboutmeController', () => {
  let controller: AboutmeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AboutmeController],
    }).compile();

    controller = module.get<AboutmeController>(AboutmeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
