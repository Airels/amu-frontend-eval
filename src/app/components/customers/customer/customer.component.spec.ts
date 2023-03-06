import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import { By } from "@angular/platform-browser";
import { SharedModule } from "../../../shared/shared.module";

describe('CustomerComponent', () => {
  let component: CustomerComponent;
  let fixture: ComponentFixture<CustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerComponent ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show customer information', () => {
    const customer = {
      fullName: 'Jean Test',
      email: 'jean.test@www.net'
    };
    component.customer = customer;
    fixture.detectChanges();

    const fullnameSpan = fixture.debugElement.query(By.css('#fullname'));
    const emailSpan = fixture.debugElement.query(By.css('#email'));

    expect(fullnameSpan.nativeElement.innerText).toBe(customer.fullName);
    expect(emailSpan.nativeElement.innerText).toBe(customer.email);
  });

  it('should show header information and hide customer row', () => {
    component.header = true;
    fixture.detectChanges();

    const row = fixture.debugElement.query(By.css('div'));
    const fullnameSpan = fixture.debugElement.query(By.css('#fullname'));
    const emailSpan = fixture.debugElement.query(By.css('#email'));

    expect(row.nativeElement.innerHTML).toContain('Nom complet');
    expect(row.nativeElement.innerHTML).toContain('E-Mail');

    expect(fullnameSpan).toBeNull();
    expect(emailSpan).toBeNull();
  })
});
