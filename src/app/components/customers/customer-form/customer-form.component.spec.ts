import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { SharedModule } from "../../../shared/shared.module";
import { By } from "@angular/platform-browser";
import Customer from "../../../models/customer.model";
import Spy = jasmine.Spy;

describe('CustomerFormComponent', () => {
  let component: CustomerFormComponent;
  let fixture: ComponentFixture<CustomerFormComponent>;
  let spyEventEmitterEmit: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SharedModule ],
      declarations: [ CustomerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFormComponent);
    component = fixture.componentInstance;
    spyEventEmitterEmit = spyOn(component.submitEventEmitter, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit customer', async () => {
    const fullnameInput = fixture.debugElement.query(By.css('[name=fullName]'));
    const emailInput = fixture.debugElement.query(By.css('[name=email]'));
    const saveButton = fixture.debugElement.query(By.css('#saveButton'));
    let emitted: Customer = {};

    component.submitEventEmitter.asObservable().subscribe(e => emitted = e);

    setFieldValue()

    fullnameInput.nativeElement.value = 'Jean Test';
    emailInput.nativeElement.value = 'jean.test@www.net';

    fixture.detectChanges();
    await fixture.whenStable();

    saveButton.triggerEventHandler('click', {});

    fixture.detectChanges();
    await fixture.whenStable();

    expect(spyEventEmitterEmit).toHaveBeenCalled();
    expect(emitted.fullName).toBe('Jean Test');
    expect(emitted.email).toBe('jean.test@www.net');
  })
});
