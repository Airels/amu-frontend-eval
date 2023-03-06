import { TestBed } from '@angular/core/testing';

import { InvoiceService } from './invoice.service';
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import Invoice from "../../models/invoice.model";
import { of } from "rxjs";

describe('InvoiceService', () => {
  let service: InvoiceService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    service = TestBed.inject(InvoiceService);
    // service.addInvoice = (invoice: Invoice) => of(invoice);
    // http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
