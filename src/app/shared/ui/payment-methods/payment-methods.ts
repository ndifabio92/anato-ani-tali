import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PaymentMethod } from '@app/core/interfaces/payment.interface';
import { PaymentService } from '@app/core/services/payment.service';

@Component({
  selector: 'app-payment-methods',
  imports: [TitleCasePipe],
  templateUrl: './payment-methods.html',
  standalone: true,
})
export class PaymentMethods {
  private paymentService = inject(PaymentService);

  methods = toSignal(this.paymentService.getAll(), { initialValue: [] });

  readonly iconClass: Record<PaymentMethod, string> = {
    credit: 'credit_card',
    cash: 'attach_money',
    transfer: 'account_balance_wallet',
  };
}
