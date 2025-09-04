import { Module } from '@nestjs/common';
import { ProductsMsService } from './products-ms.service';
import { ProductsMsController } from './products-ms.controller';

@Module({
  controllers: [ProductsMsController],
  providers: [ProductsMsService],
})
export class ProductsMsModule {}
