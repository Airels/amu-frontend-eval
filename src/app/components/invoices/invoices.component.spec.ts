import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesComponent } from './invoices.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterModule } from "@angular/router";
import { InvoiceFormComponent } from "./invoice-form/invoice-form.component";
import { SharedModule } from "../../shared/shared.module";

describe('InvoicesComponent', () => {
  let component: InvoicesComponent;
  let fixture: ComponentFixture<InvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterModule.forRoot([]),
        SharedModule
      ],
      declarations: [
        InvoicesComponent,
        InvoiceFormComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
