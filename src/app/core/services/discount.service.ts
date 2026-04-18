import { Injectable } from '@angular/core';
import { Discount } from '../interfaces/discount.interface';

@Injectable({
  providedIn: 'root',
})
export class DiscountService {
  private discounts: Discount[] = [
    {
      id: 1,
      method: 'cash',
      percentage: 15,
    },
    {
      id: 2,
      method: 'transfer',
      percentage: 10,
    },
    {
      id: 3,
      method: 'installments',
      percentage: 0,
    },
  ];

  getDiscounts(): Discount[] {
    return this.discounts;
  }
}
