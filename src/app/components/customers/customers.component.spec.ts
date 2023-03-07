import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomerService } from "../../shared/services/customer.service";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import Spy = jasmine.Spy;
import { of } from "rxjs";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerComponent } from "./customer/customer.component";

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  let customerService: CustomerService;
  let getCustomersSpy: Spy

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot([])
      ],
      declarations: [
        CustomersComponent,
        CustomerListComponent,
        CustomerComponent
      ],
      providers: [
        CustomerService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;

    customerService = TestBed.inject(CustomerService);
    getCustomersSpy = spyOn(customerService, 'getCustomers');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call api', () => {
    getCustomersSpy.and.returnValues(of([
      {
        id: 1,
        fullName: 'Jean Test',
        email: 'jean.test@www.net'
      },
      {
        id: 2,
        fullName: 'Paul Test',
        email: 'paul.test@www.net'
      },
      {
        id: 3,
        fullName: 'Jacques Test',
        email: 'jacques.test@www.net'
      }
    ]));

    fixture.detectChanges();

    expect(getCustomersSpy).toHaveBeenCalled();
    expect(component.customers.length).toBe(3);
  });
});
