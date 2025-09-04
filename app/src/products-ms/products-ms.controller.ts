import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsMsService } from './products-ms.service';
import { CreateProductsMDto } from './dto/create-products-m.dto';
import { UpdateProductsMDto } from './dto/update-products-m.dto';

@Controller('products-ms')
export class ProductsMsController {
  constructor(private readonly productsMsService: ProductsMsService) {}

  @Post()
  create(@Body() createProductsMDto: CreateProductsMDto) {
    return this.productsMsService.create(createProductsMDto);
  }

  @Get()
  findAll() {
    return this.productsMsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsMsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsMDto: UpdateProductsMDto) {
    return this.productsMsService.update(+id, updateProductsMDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsMsService.remove(+id);
  }
}
