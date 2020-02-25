import { Controller, Post, Body, Get, Param } from "@nestjs/common";
import {  ProductsService} from './products.service';

@Controller('products')
export class ProductsController {
    constructor( private readonly productService: ProductsService) {}

    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number) {
        const generatedId =  this.productService.insertProduct(prodTitle, prodDesc, prodPrice);
        return { id: generatedId };
    }

    @Get()
    getAllProducts() {
        return this.productService.getProduct();
    }

    @Get(':id')
    getProduct(@Param('id') prodId: string) {
        return this.productService.getSingleProduct(prodId);
    }
}