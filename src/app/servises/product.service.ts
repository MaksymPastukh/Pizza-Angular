import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): ProductType[] {
    return [
      {
        image: 'product1.png',
        title: 'Meat Deluxe',
        subTitle: 'Pepperoni, onions, bacon, tomato paste, sausage, peppers, mushrooms, chili sauce, pineapple.',
        dateTime: '2022-11-31  15:00:00'
      },
      {
        image: 'product2.png',
        title: 'Marine Premium',
        subTitle: 'Peppers, cheese, shrimp, calamari, mussels, salmon',
        dateTime: '2022-12-30  12:00:00'
      },
      {
        image: 'product3.png',
        title: 'Bacon and Sausage',
        subTitle: 'Bacon, cheese, sausage, pineapple, tomato paste',
        dateTime: '2022-05-28  21:00:00'
      },
      {
        image: 'product4.png',
        title: 'Chicken Deluxe',
        subTitle: 'Chicken, pineapple, pepperoni cheese, pizza sauce, tomato paste',
        dateTime: '2022-02-05  17:00:00'
      },
      {
        image: 'product5.png',
        title: 'Barbecue Premium',
        subTitle: 'BBQ pork, Barbecue sauce, cheese, chicken, pizza sauce, chili sauce',
        dateTime: '2022-10-13  19:00:00'
      },
      {
        image: 'product6.png',
        title: 'Pepperoni Double',
        subTitle: 'Pepperoni, cheese, 2 types of sausage: fried and cooked',
        dateTime: '2022-04-24  12:00:00'
      },
      {
        image: 'product7.png',
        title: 'Chicken trio',
        subTitle: 'Fried chicken, Braised chicken, Chicken nuggets, peppers, cheese, mushrooms, pizza sauce',
        dateTime: '2022-12-11  15:00:00'
      },
      {
        image: 'product8.png',
        title: 'Cheese',
        subTitle: 'Jugas Cheese, Moldy Cheese, Mozzarella Cheese, Secret Cheese.',
        dateTime: '2022-06-21  20:00:00'
      },
    ]
  }
}
