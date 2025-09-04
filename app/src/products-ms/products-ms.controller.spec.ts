import { Test, TestingModule } from '@nestjs/testing';
import { ProductsMsController } from './products-ms.controller';
import { ProductsMsService } from './products-ms.service';

describe('ProductsMsController', () => {
  let controller: ProductsMsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsMsController],
      providers: [ProductsMsService],
    }).compile();

    controller = module.get<ProductsMsController>(ProductsMsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
