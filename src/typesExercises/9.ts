type CreditPayment = {
  type: 'credit';
  amount: number;
  installments: number;
};

type DebitPayment = {
  type: 'debit';
  amount: number;
};

type PixPayment = {
  type: 'pix';
  amount: number;
  key: string;
};

type Payment = CreditPayment | DebitPayment | PixPayment;

export function processPayment(payment: Payment): string {
  switch (payment.type) {
    case 'credit':
      return `"Pagamento no crédito em Xx de R$Y"`;
    case 'debit':
      return `Pagamento no débito de R$Y`;
    case 'pix':
      return `Pagamento via PIX para chave Z no valor de R$Y`;
    default:
      return 'Unknown Payment Method';
  }
}
