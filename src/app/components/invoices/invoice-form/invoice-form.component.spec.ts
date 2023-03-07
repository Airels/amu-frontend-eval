import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceFormComponent } from './invoice-form.component';
import { RouterModule } from "@angular/router";
import { By } from "@angular/platform-browser";
import InvoiceStatus from "../../../models/invoice-status.model";
import Spy = jasmine.Spy;
import { SharedModule } from "../../../shared/shared.module";

describe('InvoiceFormComponent', () => {
  let component: InvoiceFormComponent;
  let fixture: ComponentFixture<InvoiceFormComponent>;
  let spyEventEmitterEmit: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        SharedModule
      ],
      declarations: [ InvoiceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceFormComponent);
    component = fixture.componentInstance;
    spyEventEmitterEmit = spyOn(component.submitEventEmitter, 'emit');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit invoice', () => {
    const form = component.form;
    const saveButton = fixture.debugElement.query(By.css('button'));
    const formData = {
      amount: 500,
      status: InvoiceStatus.PAID
    };

    expect(form.valid).toBeFalsy();

    // @ts-ignore
    form.setValue(formData);

    fixture.detectChanges();

    expect(form.valid).toBeTruthy();

    saveButton.nativeElement.click();

    expect(spyEventEmitterEmit).toHaveBeenCalled();

    let emitted = spyEventEmitterEmit.calls.mostRecent().args[0];

    expect(emitted.amount).toBe(500);
    expect(emitted.status).toBe(InvoiceStatus.PAID);
  });

  it('should button disabled if form invalid', () => {
    const saveButton = fixture.debugElement.query(By.css('button'));
    const formData = {
      amount: 500,
      status: InvoiceStatus.PAID
    };

    expect(saveButton.nativeElement.disabled).toBeTruthy();

    // @ts-ignore
    component.form.setValue(formData);

    fixture.detectChanges();

    expect(saveButton.nativeElement.disabled).toBeFalsy();
  });
});
