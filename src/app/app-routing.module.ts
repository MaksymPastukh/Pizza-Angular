import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from "./component/pages/main/main.component";
import {AboutComponent} from "./component/pages/about/about.component";
import {ProductComponent} from "./component/pages/product/product.component";
import {OrderComponent} from "./component/pages/order/order.component";
import {ProductHomeComponent} from "./component/pages/product-home/product-home.component";
import {AuthGuard} from "./auth/auth.guard";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'about', component: AboutComponent},
  {path: 'product', component: ProductComponent},
  {path: 'product-home/:id', component: ProductHomeComponent},
  {path: 'order', component: OrderComponent, canActivate: [AuthGuard]},
  {path: 'pizza', redirectTo: ''},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
