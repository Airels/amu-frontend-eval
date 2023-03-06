import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListComponent } from './customer-list.component';
import { By } from "@angular/platform-browser";
import { CustomerComponent } from "../customer/customer.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";

describe('CustomerListComponent', () => {
  let component: CustomerListComponent;
  let fixture: ComponentFixture<CustomerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        SharedModule,
        RouterModule.forRoot([])
      ],
      declarations: [ CustomerListComponent, CustomerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show no customers', () => {
    component.customers = [];
    fixture.detectChanges();

    const text = fixture.debugElement.query(By.css('span'));
    expect(text.nativeElement.textContent).toBe('Pas de clients enregistré');
  });

  it('should show customers', () => {
    const customers = [
      {
        id: 1,
        fullName: 'Jean Test',
        email: 'jean.test@www.net'
      },
      {
        id: 2,
        fullName: 'Paul Test',
        email: 'jean.test@www.net'
      },
      {
        id: 3,
        fullName: 'Phillipe Test',
        email: 'jean.test@www.net'
      }
    ];
    component.customers = customers;
    fixture.detectChanges();

    const customersInfo = fixture.debugElement.queryAll(By.css('app-customer'));

    expect(customersInfo.length).toBe(customers.length + 1);
  });
});
