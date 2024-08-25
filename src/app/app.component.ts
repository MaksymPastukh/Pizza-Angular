import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CardService} from "./services/card.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public products: ProductType[] = []

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  lateData: Promise<string> | null = null

  constructor(private productService: ProductService, public cardService: CardService) {

  }


  ngOnInit() {
    this.lateData = new Promise<string>(function (resolve) {
      setTimeout(() => {
        resolve('Hello')
      }, 3000)
    })

    this.products = this.productService.getProducts()
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'})
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.productTitle = title
    this.cardService.count++
  }

  public createOrder() {
    if (!this.formValues.productTitle) {
      alert('Выберите пиццу')
      return
    }
    if (!this.formValues.address) {
      alert('Введите адрес')
      return
    }
    if (!this.formValues.phone) {
      alert('Введите телефон')
      return
    }
    alert('Спасибо за заказ')

    this.formValues = {
      productTitle: '',
      address: '',
      phone: ''
    }
  }

  protected readonly Location = Location;
}
