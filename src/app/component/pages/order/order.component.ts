import {Component, OnInit} from '@angular/core';
import {CardService} from "../../../services/card.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private cartService: CardService, private activateRoute: ActivatedRoute) {
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  ngOnInit(): void {
    // if(this.cartService.product) {
    //   this.formValues.productTitle = this.cartService.product
    // }

    const productParam = this.activateRoute.snapshot.queryParamMap.get('product')
    if(productParam) {
      this.formValues.productTitle = productParam
    }

    // this.activateRoute.queryParams.subscribe((params) => {
    //   if (params['product']) {
    //     this.formValues.productTitle = params['product']
    //   }
    // })
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
