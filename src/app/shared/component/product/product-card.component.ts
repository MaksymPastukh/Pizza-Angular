import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import {TitleComponent} from "../title/title.component";
import {CartProductService} from "../../services/cart-product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [CartProductService]
})
export class ProductCardComponents {
  @Input() product: ProductType
  @Output() addToCardEvent: EventEmitter<string> = new EventEmitter<string>()

  @ViewChild(TitleComponent)
  private titleComponent!: TitleComponent

  constructor(public cartProductService: CartProductService) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      dateTime: ''
    }
  }

  addProductToCard(): void {
    this.cartProductService.count++
    this.addToCardEvent.emit(this.titleComponent.toUpper())
  }
}
