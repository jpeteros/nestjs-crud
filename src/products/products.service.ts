import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from  './product.model';

@Injectable()
export class ProductsService {
    private prouducts: Product[] = [];

    insertProduct(title: string, desc: string, price: number ) {
        const prodId =  Math.random().toString();
        const newProduct = new Product(prodId, title, desc, price)
        this.prouducts.push(newProduct);
        return prodId;
    }
    
    getProduct() {
        return [...this.prouducts];
    }

    getSingleProduct(productId: string) {
        const product = this.prouducts.find(prod => prod.id === productId);
        if(!product) {
            throw new NotFoundException('Could not find product...');
        }
        return {...product};
    }

}