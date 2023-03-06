import { TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

describe('CustomerService', () => {
  let service: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterModule.forRoot([])
      ]
    });
    service = TestBed.inject(CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
