import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductType[] = []

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(`https://testologia.ru/pizzas`)
  }

  getProduct(id: number): ProductType | undefined {
    return this.products.find(item => (item.id === id))
  }
}
