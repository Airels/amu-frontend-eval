import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormComponent } from './invoice-form.component';
import { ActivatedRoute } from "@angular/router";

describe('InvoiceFormComponent', () => {
  let component: InvoiceFormComponent;
  let fixture: ComponentFixture<InvoiceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ActivatedRoute
      ],
      declarations: [ InvoiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
