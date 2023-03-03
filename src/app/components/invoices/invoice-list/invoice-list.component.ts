import { Component, Input } from '@angular/core';
import Invoice from "../../../models/invoice.model";

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent {

  @Input() invoices: Invoice[] = [];

}
