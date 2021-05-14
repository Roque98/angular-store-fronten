import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { productsData } from '../../mock/products.data'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[];

  constructor() { 
    this.products = productsData;
  }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){
    return this.products.find((item) => {
      return id === item.id
    })
  }
}
