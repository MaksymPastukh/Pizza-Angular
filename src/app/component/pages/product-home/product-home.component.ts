import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../../../services/product.service";
import {ProductType} from "../../../types/product.type";

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.scss']
})
export class ProductHomeComponent implements OnInit {

  product: ProductType

  constructor(private activeRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      subTitle: '',
      dateTime:  ''
    }
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params) => {
      if (params['id']) {
        const product = this.productService.getProduct(+params['id'])
        if(product) {
          this.product = product
        } else  {
          this.router.navigate(['/'])
        }
      }
    })
  }


}
