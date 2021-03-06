import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { productsData } from '../../mock/products.data'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = `${environment.urlApi}/products`;

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

  createProduct(product: Product){
    return this.http.post<Product>(`${this.url}`, product);
  }

  updateProduct(id: string, changes:Partial<Product>){
    return this.http.put(`${this.url}/${id}`, changes);
  }

  delete(id: string){
    return this.http.delete(`${this.url}/${id}`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      )
  }

  private handleError(error: HttpErrorResponse){
    console.log(error);
    return throwError('ups, algo salio mal');
  }
}
