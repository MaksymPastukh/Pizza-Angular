import {Component, EventEmitter, Output} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public products: ProductType[] = [
    {
      image: 'product1.png',
      title: 'Meat Deluxe',
      subTitle: 'Pepperoni, onions, bacon, tomato paste, sausage, peppers, mushrooms, chili sauce, pineapple.'
    },
    {
      image: 'product2.png',
      title: 'Marine Premium',
      subTitle: 'Peppers, cheese, shrimp, calamari, mussels, salmon'
    },
    {
      image: 'product3.png',
      title: 'Bacon and Sausage',
      subTitle: 'Bacon, cheese, sausage, pineapple, tomato paste'
    },
    {
      image: 'product4.png',
      title: 'Chicken Deluxe',
      subTitle: 'Chicken, pineapple, pepperoni cheese, pizza sauce, tomato paste'
    },
    {
      image: 'product5.png',
      title: 'Barbecue Premium',
      subTitle: 'BBQ pork, Barbecue sauce, cheese, chicken, pizza sauce, chili sauce'
    },
    {
      image: 'product6.png',
      title: 'Pepperoni Double',
      subTitle: 'Pepperoni, cheese, 2 types of sausage: fried and cooked'
    },
    {
      image: 'product7.png',
      title: 'Chicken trio',
      subTitle: 'Fried chicken, Braised chicken, Chicken nuggets, peppers, cheese, mushrooms, pizza sauce'
    },
    {
      image: 'product8.png',
      title: 'Cheese',
      subTitle: 'Jugas Cheese, Moldy Cheese, Mozzarella Cheese, Secret Cheese.'
    },
  ]

  public formValues = {
    productTitle: '',
    address: '',
    phone: ''
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'})
  }

  public addToCart(title: string, target: HTMLElement): void {
    this.scrollTo(target)
    this.formValues.productTitle = title

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
}
