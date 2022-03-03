import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'products', 
  loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },

  { path: 'product', loadChildren: () => import('./pages/products/product/product.module').then(m => m.ProductModule) },
  {path:'**',redirectTo: '',pathMatch:'full'},//ruta 404

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
