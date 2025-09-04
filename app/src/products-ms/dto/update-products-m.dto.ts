import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsMDto } from './create-products-m.dto';

export class UpdateProductsMDto extends PartialType(CreateProductsMDto) {}
