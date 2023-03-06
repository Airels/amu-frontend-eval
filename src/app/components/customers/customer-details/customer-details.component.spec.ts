import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsComponent } from './customer-details.component';
import { CustomerService } from "../../../shared/services/customer.service";
import { InvoiceService } from "../../../shared/services/invoice.service";
import { HttpClientModule } from "@angular/common/http";
import { ActivatedRoute, Router, RouterModule } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";
import { of } from "rxjs";
import InvoiceStatus from "../../../models/invoice-status.model";
import { InvoiceListComponent } from "../../invoices/invoice-list/invoice-list.component";
import { By } from "@angular/platform-browser";
import Spy = jasmine.Spy;

describe('CustomerDetailsComponent', () => {
  let component: CustomerDetailsComponent;
  let fixture: ComponentFixture<CustomerDetailsComponent>;
  let customerService: CustomerService;
  let invoiceService: InvoiceService;
  let getCustomerSpy: Spy;
  let getInvoicesFromCustomerSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([]),
        SharedModule
      ],
      declarations: [ CustomerDetailsComponent, InvoiceListComponent ],
      providers: [
        CustomerService,
        InvoiceService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({
              idCustomer: 1
            })
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsComponent);
    component = fixture.componentInstance;

    customerService = TestBed.inject(CustomerService);
    invoiceService = TestBed.inject(InvoiceService);

    getCustomerSpy = spyOn(customerService, 'getCustomer');
    getInvoicesFromCustomerSpy = spyOn(invoiceService, 'getInvoicesFromCustomer');

    getCustomerSpy.and.returnValues(of({
      id: 1,
      fullName: 'Jean Test',
      email: 'jean.test@www.net'
    }));

    getInvoicesFromCustomerSpy.and.returnValues(of([
      {
        amount: 500,
        status: InvoiceStatus.SENT,
        customer_id: 1
      },
      {
        amount: 1000,
        status: InvoiceStatus.PAID,
        customer_id: 1
      }
    ]));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call api', () => {
    expect(getCustomerSpy).toHaveBeenCalledOnceWith(1);
    expect(getInvoicesFromCustomerSpy).toHaveBeenCalledOnceWith(1);
  });

  it('should show user information', () => {
    const fullnameTitle = fixture.debugElement.query(By.css('h2'));
    const emailTitle = fixture.debugElement.query(By.css('h5'));

    expect(fullnameTitle.nativeElement.innerText).toBe('Fiche de Jean Test');
    expect(emailTitle.nativeElement.innerText).toBe('(jean.test@www.net)');
  });

});
