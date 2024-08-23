import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductComponent } from './component/product/product.component';
import { TitleComponent } from './component/title/title.component';
import { CoolInputDirective } from './directives/cool-input.directive';
import { IsChickenDirective } from './directives/is-chicken.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FooterComponent]
})
export class AppModule { }
