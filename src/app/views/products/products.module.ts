import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductComponent} from "./product/product.component";
import {ProductHomeComponent} from "./product-home/product-home.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ProductComponent,
    ProductHomeComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    ProductsRoutingModule
  ]
})
export class ProductsModule {
}

