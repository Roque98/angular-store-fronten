import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormProductComponent } from './components/form-product/form-product.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'inventario', component: InventarioComponent },
      { path: 'home', component: HomeAdminComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'products/create', component: FormProductComponent },
      { path: 'products/edit/:id', component: UpdateProductComponent },
      { path: '**', redirectTo: 'inventario' },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
