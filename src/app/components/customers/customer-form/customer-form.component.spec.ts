import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFormComponent } from './customer-form.component';
import { SharedModule } from "../../../shared/shared.module";
import { By } from "@angular/platform-browser";
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

  it('should emit customer', () => {
    const form = component.form;
    const saveButton = fixture.debugElement.query(By.css('button'));
    const formData = {
      fullName: 'Jean Test',
      email: 'jean.test@www.net'
    };

    expect(form.valid).toBeFalsy();

    form.setValue(formData);

    fixture.detectChanges();

    expect(form.valid).toBeTruthy();

    saveButton.nativeElement.click();

    expect(spyEventEmitterEmit).toHaveBeenCalled();

    let emitted = spyEventEmitterEmit.calls.mostRecent().args[0];

    expect(emitted.fullName).toBe('Jean Test');
    expect(emitted.email).toBe('jean.test@www.net');
  });

  it('should button disabled if form invalid', () => {
    const saveButton = fixture.debugElement.query(By.css('button'));
    const formData = {
      fullName: 'Jean Test',
      email: 'jean.test@www.net'
    };

    expect(saveButton.nativeElement.disabled).toBeTruthy();

    component.form.setValue(formData);

    fixture.detectChanges();

    expect(saveButton.nativeElement.disabled).toBeFalsy();
  });
});
