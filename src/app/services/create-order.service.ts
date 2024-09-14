import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrderType} from "../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  constructor(private http: HttpClient) {
  }

  createOrder(data: { product: string, address: string, phone: string }) {
    return this.http.post<OrderType>(`https://testologia.ru/order-pizza`, data)
  }
}
