import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() {
    return this.authHttp.get('/api/orders')
      .map(response => response.json());
  }
}
