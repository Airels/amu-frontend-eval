import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceListComponent } from './invoice-list.component';
import { By } from "@angular/platform-browser";
import InvoiceStatus from "../../../models/invoice-status.model";
import { SharedModule } from "../../../shared/shared.module";
import Invoice from "../../../models/invoice.model";

describe('InvoiceListComponent', () => {
  let component: InvoiceListComponent;
  let fixture: ComponentFixture<InvoiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ InvoiceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show no invoices', () => {
    component.invoices = [];
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tr'));
    const span = fixture.debugElement.query(By.css('span'));

    expect(rows.length).toBe(1);
    expect(span.nativeElement.textContent).toBe('Pas de factures associée')
  });

  it('should show invoices', () => {
    const invoices = [
      new Invoice(500, InvoiceStatus.SENT),
      {
        id: 2,
        amount: 1000,
        status: InvoiceStatus.PAID
      },
      {
        id: 3,
        amount: 5000,
        status: InvoiceStatus.PAID
      }
    ];
    component.invoices = invoices;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tr'));
    expect(rows.length).toBe(invoices.length + 1);

    let data;
    for (let i = 0; i < invoices.length; i++) {
      data = rows[i+1].childNodes;

      console.log({ i, length: invoices.length, row: rows[i], data });

      expect(+data[0].nativeNode.textContent.trim()).toBe(invoices[i].amount);
      expect(data[1].nativeNode.textContent.trim()).toBe(invoices[i].status);
    }
  });
});
