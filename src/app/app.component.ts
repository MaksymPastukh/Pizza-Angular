import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductType} from "./types/product.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public products: ProductType[] = [
    {
      image: 'product1.png',
      title: 'Meat Deluxe',
      subTitle: 'Pepperoni, onions, bacon, tomato paste, sausage, peppers, mushrooms, chili sauce, pineapple.',
      dateTime:  '2022-11-31  15:00:00'
    },
    {
      image: 'product2.png',
      title: 'Marine Premium',
      subTitle: 'Peppers, cheese, shrimp, calamari, mussels, salmon',
      dateTime:  '2022-12-30  12:00:00'
    },
    {
      image: 'product3.png',
      title: 'Bacon and Sausage',
      subTitle: 'Bacon, cheese, sausage, pineapple, tomato paste',
      dateTime:  '2022-05-28  21:00:00'
    },
    {
      image: 'product4.png',
      title: 'Chicken Deluxe',
      subTitle: 'Chicken, pineapple, pepperoni cheese, pizza sauce, tomato paste',
      dateTime:  '2022-02-05  17:00:00'
    },
    {
      image: 'product5.png',
      title: 'Barbecue Premium',
      subTitle: 'BBQ pork, Barbecue sauce, cheese, chicken, pizza sauce, chili sauce',
      dateTime:  '2022-10-13  19:00:00'
    },
    {
      image: 'product6.png',
      title: 'Pepperoni Double',
      subTitle: 'Pepperoni, cheese, 2 types of sausage: fried and cooked',
      dateTime:  '2022-04-24  12:00:00'
    },
    {
      image: 'product7.png',
      title: 'Chicken trio',
      subTitle: 'Fried chicken, Braised chicken, Chicken nuggets, peppers, cheese, mushrooms, pizza sauce',
      dateTime:  '2022-12-11  15:00:00'
    },
    {
      image: 'product8.png',
      title: 'Cheese',
      subTitle: 'Jugas Cheese, Moldy Cheese, Mozzarella Cheese, Secret Cheese.',
      dateTime:  '2022-06-21  20:00:00'
    },
  ]

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  lateData: Promise<string> | null = null

  ngOnInit() {
    this.lateData = new Promise<string>(function (resolve) {
      setTimeout(() => {
        resolve('Hello')
      }, 3000)
    } )
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

  protected readonly Location = Location;
}
