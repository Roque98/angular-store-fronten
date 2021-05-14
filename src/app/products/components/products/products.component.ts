import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getAllProducts()
      .subscribe((products) => {
        this.products = products;
      })
  }
  
  addCart(){
    console.log('Agregar al carrito');
    
  }

  clickProduct($event:any){
    console.log($event);
    
  }
}
