import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardService} from "../../../services/card.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private cartService: CardService, private activateRoute: ActivatedRoute) {
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  private subscription: Subscription | null = null

  ngOnInit(): void {
    // if(this.cartService.product) {
    //   this.formValues.productTitle = this.cartService.product
    // }

    // const productParam = this.activateRoute.snapshot.queryParamMap.get('product')
    // if(productParam) {
    //   this.formValues.productTitle = productParam
    // }

    this.subscription = this.activateRoute.queryParams.subscribe((params) => {
      if (params['product']) {
        this.formValues.productTitle = params['product']
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
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
