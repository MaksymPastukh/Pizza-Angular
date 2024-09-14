import {Component, OnDestroy, OnInit} from '@angular/core';
import {CardService} from "../../../services/card.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {CreateOrderService} from "../../../services/create-order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {

  constructor(private cartService: CardService, private activateRoute: ActivatedRoute, private createOrderService: CreateOrderService) {
  }

  public formValues = {
    productTitle: '',
    address: '',
    phone: '',
  }

  private subscription: Subscription | null = null
  private subscriptionOrder: Subscription | null = null

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
    this.subscriptionOrder?.unsubscribe()
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

    this.subscriptionOrder = this.createOrderService.createOrder({
      product: this.formValues.productTitle,
      address: this.formValues.address,
      phone: this.formValues.phone,
    })
      .subscribe(
        {
          next: response => {
            if (response.success && !response.message) {
              alert('Thank you for your order')

              this.formValues = {
                productTitle: '',
                address: '',
                phone: ''
              }
            } else {
              alert('An error has occurred')
            }
          },
          error: err => {
            console.log(err)
          }
        })
  }
}
