import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './component/common/header/header.component';
import {FooterComponent} from './component/common/footer/footer.component';
import {ProductCardComponents} from './component/common/product/product-card.component';
import {TitleComponent} from './component/common/title/title.component';
import {CoolInputDirective} from './directives/cool-input.directive';
import {IsChickenDirective} from './directives/is-chicken.directive';
import {ChickenDescriptionPipe} from './pipes/chicken-description.pipe';
import {WordUpperPipe} from './pipes/word-upper.pipe';
import {ChickenProductsPipe} from './pipes/chicken-products.pipe';
import {MainComponent} from "./component/pages/main/main.component";
import {AboutComponent} from "./component/pages/about/about.component";
import {OrderComponent} from './component/pages/order/order.component';
import {ProductComponent} from './component/pages/product/product.component';
import {ProductHomeComponent} from './component/pages/product-home/product-home.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./auth/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponents,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    WordUpperPipe,
    ChickenProductsPipe,
    MainComponent,
    AboutComponent,
    ProductComponent,
    OrderComponent,
    ProductHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
