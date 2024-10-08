import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from "./views/layout.component";

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'order', loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'product', loadChildren: () => import('./views/products/products.module').then(m => m.ProductsModule)
      },
    ]
  },

  {path: 'pizza', redirectTo: ''},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
