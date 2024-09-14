import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit, OnDestroy {

  product: ProductType

  private subscription: Subscription | null = null

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      dateTime: ''
    }
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if (params['id']) {
        this.subscription = this.productService.getProduct(+params['id'])
          .subscribe({
            next: product => {
              this.product = product
            },
            error: (err) => {
              this.router.navigate(['/'])
            }
          })
      }
    })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }


}
