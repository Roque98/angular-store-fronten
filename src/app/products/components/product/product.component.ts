import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/core/interfaces/product.interface';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product:Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter()

  constructor(
    private cardService: CartService
  ) { }

  ngOnInit(): void {
  }

  addCart(){
    // this.productClicked.emit(this.product.id);
    this.cardService.addCart(this.product);
    
  }

}
