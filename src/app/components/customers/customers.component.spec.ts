import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomerService } from "../../shared/services/customer.service";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        SharedModule,
        RouterModule.forRoot([])
      ],
      declarations: [ CustomersComponent ],
      providers: [
        CustomerService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not be implemented', () => {
    expect(false).toBeTrue();
  });
});
