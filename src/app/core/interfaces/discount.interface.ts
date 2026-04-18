export type PaymentMethod = 'installments' | 'transfer' | 'cash';

export interface Discount {
  id: number;
  method: PaymentMethod;
  percentage: number;
}
