import { Injectable } from '@nestjs/common';
import { CreateProductsMDto } from './dto/create-products-m.dto';
import { UpdateProductsMDto } from './dto/update-products-m.dto';

@Injectable()
export class ProductsMsService {
  create(createProductsMDto: CreateProductsMDto) {
    return 'This action adds a new productsM';
  }

  findAll() {
    return `This action returns all productsMs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productsM`;
  }

  update(id: number, updateProductsMDto: UpdateProductsMDto) {
    return `This action updates a #${id} productsM`;
  }

  remove(id: number) {
    return `This action removes a #${id} productsM`;
  }
}
