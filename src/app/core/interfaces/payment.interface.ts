export const PAYMENT_METHOD = {
  CREDIT: 'credit',
  TRANSFER: 'transfer',
  CASH: 'cash',
};
export type PaymentMethod = (typeof PAYMENT_METHOD)[keyof typeof PAYMENT_METHOD];

export interface Payment {
  id: number;
  method: PaymentMethod;
  label: string;
}
