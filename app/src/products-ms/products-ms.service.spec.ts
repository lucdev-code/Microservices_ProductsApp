import { Test, TestingModule } from '@nestjs/testing';
import { ProductsMsService } from './products-ms.service';

describe('ProductsMsService', () => {
  let service: ProductsMsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsMsService],
    }).compile();

    service = module.get<ProductsMsService>(ProductsMsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
