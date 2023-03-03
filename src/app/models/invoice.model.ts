import InvoiceStatus from "./invoice-status.model";

export default class Invoice {
  amount: number;
  status: InvoiceStatus
  customer_id?: number;

  constructor(amount: number, status: InvoiceStatus, customerId?: number) {
    this.amount = amount;
    this.status = status;
    this.customer_id = customerId;
  }
}
