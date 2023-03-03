import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import Customer from "../../../models/customer.model";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {

  @Output('onSubmit') submitEventEmitter = new EventEmitter<Customer>();

  public form = new FormGroup({
    fullName: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required, Validators.email ])
  });

  onSubmit(event: Event) {
    event.preventDefault();

    const customer = { ...this.form.value };

    this.submitEventEmitter.emit(new Customer(
      customer.fullName?? '',
      customer.email?? ''
    ));

    this.form.reset();
  }

}
