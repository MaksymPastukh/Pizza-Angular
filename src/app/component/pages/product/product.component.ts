import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {ProductService} from "../../../services/product.service";
import {CardService} from "../../../services/card.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public products: ProductType[] = []

  constructor(private productService: ProductService,
              private cartService: CardService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

  // public addToCart(title: string): void {
  //   this.cartService.product = title
  //   this.router.navigate(['/order'], {queryParams: {product: title}})
  // }

}
