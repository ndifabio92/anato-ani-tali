import { Component, input } from '@angular/core';

@Component({
  selector: 'card-pricing',
  imports: [],
  templateUrl: './card-pricing.html',
})
export class CardPricing {
  isPopular = input<boolean>(false);
}
