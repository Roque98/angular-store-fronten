import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  loaded = false;
  products = [];
  displayedColumns: string[] = ['id','title', 'price','actions']

  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productService.getAllProducts()
      .subscribe((products) => {
        this.products = products;
        this.loaded = true;
      })
  }

  deleteProduct(id: string){
    this.productService.delete(id)
      .subscribe((rta) => {
        this.products.filter((product) => {
          return product.id === id;
        })
      })
  }

}
