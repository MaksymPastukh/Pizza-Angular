import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponents} from "./component/product/product-card.component";
import {TitleComponent} from "./component/title/title.component";
import {CoolInputDirective} from "./directives/cool-input.directive";
import {IsChickenDirective} from "./directives/is-chicken.directive";
import {ChickenDescriptionPipe} from "./pipes/chicken-description.pipe";
import {ChickenProductsPipe} from "./pipes/chicken-products.pipe";
import {WordUpperPipe} from "./pipes/word-upper.pipe";
import {RouterLinkActive, RouterLinkWithHref} from "@angular/router";
import { PopupComponent } from './component/popup/popup.component';

@NgModule({
  declarations: [
    ProductCardComponents,
    TitleComponent,
    CoolInputDirective,
    IsChickenDirective,
    ChickenDescriptionPipe,
    ChickenProductsPipe,
    WordUpperPipe,
    PopupComponent
  ],
  exports: [
    CoolInputDirective,
    TitleComponent,
    ProductCardComponents,
    PopupComponent,
  ],
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLinkWithHref,
  ]
})
export class SharedModule {
}
