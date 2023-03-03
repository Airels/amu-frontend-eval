import { Component } from '@angular/core';
import { InvoiceService } from "../../shared/services/invoice.service";
import Invoice from "../../models/invoice.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent {

  public loading = false;

  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly router: Router
  ) { }

  createInvoice(invoice: Invoice) {
    this.loading = true;

    this.invoiceService.addInvoice(invoice)
      .subscribe(() => this.router.navigate(['/', invoice.customer_id]));
  }

}
