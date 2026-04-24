import { TitleCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PaymentMethod } from '@app/core/interfaces/payment.interface';
import { PaymentService } from '@app/core/services/payment.service';
// import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-payment-methods',
  imports: [TitleCasePipe],
  templateUrl: './payment-methods.html',
  standalone: true,
})
export class PaymentMethods {
  private paymentService = inject(PaymentService);
  // private sanitizer = inject(DomSanitizer);

  methods = toSignal(this.paymentService.getAll(), { initialValue: [] });

  // readonly iconPaths: Record<PaymentMethod, SafeHtml> = {
  //   credit: this.sanitizer.bypassSecurityTrustHtml(
  //     `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
  //   ),
  //   transfer: this.sanitizer.bypassSecurityTrustHtml(
  //     `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>`,
  //   ),
  //   cash: this.sanitizer.bypassSecurityTrustHtml(
  //     `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  //   ),
  // };

  readonly iconClass: Record<PaymentMethod, string> = {
    credit: 'credit_card',
    cash: 'attach_money',
    transfer: 'account_balance_wallet',
  };
}
