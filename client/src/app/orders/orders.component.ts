import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private data: DataService, private rest: RestApiService) {}

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:4000/api/accounts/orders'
      );
      data['success']
        ? (this.orders = data['orders'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error);
    }
  }
}
