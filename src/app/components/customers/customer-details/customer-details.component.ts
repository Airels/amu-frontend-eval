import { Component, OnInit } from '@angular/core';
import Customer from "../../../models/customer.model";
import { InvoiceService } from "../../../shared/services/invoice.service";
import Invoice from "../../../models/invoice.model";
import { ActivatedRoute } from "@angular/router";
import { forkJoin, map, mergeMap, tap } from "rxjs";
import { CustomerService } from "../../../shared/services/customer.service";

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  public customer?: Customer = undefined;
  public invoices?: Invoice[] = undefined;

  constructor(
    private readonly customerService: CustomerService,
    private readonly invoiceService: InvoiceService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .pipe(
        map(params => +params['idCustomer']),
        mergeMap(customerId => forkJoin([
          this.customerService.getCustomer(customerId),
          this.invoiceService.getInvoicesFromCustomer(customerId)
        ]))
      ).subscribe(res => {
        this.customer = res[0];
        this.invoices = res[1];
    });
  }
}
