import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CardService} from "../../../services/card.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {catchError, of, Subscription, tap} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  public products: ProductType[] = []
  private subscription: Subscription | null = null
  loading: boolean = false

  constructor(private productService: ProductService,
              private cartService: CardService,
              private router: Router,
              private http: HttpClient) {
  }

  ngOnInit(): void {
    this.loading = true
    this.subscription = this.productService.getProducts()
      .pipe(
        tap(() => {
          this.loading = false
        }),
        catchError(err => of([]))
      )
      .subscribe({
        next: data => {
          this.products = data
        },
        error: err => {
          console.log(err)
          this.router.navigate(['/'])
        }
      })
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }


  // ngOnInit(): void {
  //   this.products = this.productService.getProducts()
  // }

  // public addToCart(title: string): void {
  //   this.cartService.product = title
  //   this.router.navigate(['/order'], {queryParams: {product: title}})
  // }

}
