import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { productsData } from '../../mock/products.data'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'https://platzi-store.herokuapp.com/products';

  constructor(
    private http: HttpClient
  ) { 
    
  }

  getAllProducts(){
    return this.http.get<Product[]>(this.url);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.url}/${id}`)
  }
}
