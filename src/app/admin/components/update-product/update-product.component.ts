import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { MyValidators } from 'src/app/utils/validators/validators';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {

  form: FormGroup;
  id: string;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getProduct(this.id)
        .subscribe((product) => {
          this.form.patchValue({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description
          });
          console.log(product);
          
        })
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required, MyValidators.isPriceValid]],
      title: ['', [Validators.required]],
      price: [0, [Validators.required]],
      image: '',
      description: ['', [Validators.required]]
    })
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid) {
      const product = this.form.value;
      this.productService.updateProduct(this.id, product)
        .subscribe((product) => {
          this.router.navigateByUrl('/admin/products')
        })
    }
  }

}
