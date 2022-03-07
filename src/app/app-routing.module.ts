import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: 'product', loadChildren: () => import('./pages/products/product/product.component').then(m => m.ProductComponent) },
  { path: 'checkout', loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path:'',redirectTo: '/products',pathMatch:'full'},//ruta 404
  { path:'**',redirectTo: '',pathMatch:'full'},//ruta 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
