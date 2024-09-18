import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {HeaderComponent} from "./shared/layout/header/header.component";
import {FooterComponent} from "./shared/layout/footer/footer.component";
import {LayoutComponent} from "./views/layout.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,   // Импорт коре модуля с сервисами
    AppRoutingModule // Роутинг модуль должен быть всегда подключен после остальных модулей
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    AppComponent,
    LayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
