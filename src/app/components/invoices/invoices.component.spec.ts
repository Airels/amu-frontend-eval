import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesComponent } from './invoices.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ActivatedRoute } from "@angular/router";

describe('InvoicesComponent', () => {
  let component: InvoicesComponent;
  let fixture: ComponentFixture<InvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ActivatedRoute
      ],
      declarations: [ InvoicesComponent ]
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
