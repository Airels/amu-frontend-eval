import { Component, Input } from '@angular/core';
import Customer from "../../../models/customer.model";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  @Input() customer?: Customer = undefined;
  @Input() header: boolean = false;

}
