import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';


@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductsListComponent, InventarioComponent, HomeAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
