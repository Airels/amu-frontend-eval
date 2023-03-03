import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import Customer from "../../../models/customer.model";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent {

  @Input() loading: boolean = false;
  @Output('onSubmit') submitEventEmitter = new EventEmitter<Customer>();

  public readonly saveIcon = faFloppyDisk;

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
  }

}
