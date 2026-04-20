import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { environment } from '@env/environment';
import { PaymentMethods } from '@app/shared/ui/payment-methods/payment-methods';

const envs = environment;
@Component({
  selector: 'home-page',
  standalone: true,
  imports: [TitleCasePipe, PaymentMethods],
  templateUrl: './home-page.html',
})
export default class HomePage {
  title = signal(envs.TITLE);
}
