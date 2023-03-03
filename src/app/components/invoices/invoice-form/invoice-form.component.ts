import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Invoice from "../../../models/invoice.model";
import InvoiceStatus from "../../../models/invoice-status.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { faArrowLeft, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  @Input() loading: boolean = false;
  @Output('onSubmit') submitEventEmitter = new EventEmitter<Invoice>();

  public readonly saveIcon = faFloppyDisk;
  public readonly backIcon = faArrowLeft;

  public customerId?: number = undefined;

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  public readonly InvoiceStatus = InvoiceStatus;
  public form = new FormGroup({
    amount: new FormControl(null, [ Validators.required, Validators.pattern('\\d+') ]),
    status: new FormControl(null, [ Validators.required ])
  });

  ngOnInit() {
    this.route.params
      .subscribe(params => this.customerId = params['idCustomer']);
  }

  onSubmit(event: Event) {
    event.preventDefault();

    const invoice = { ...this.form.value };

    this.submitEventEmitter.emit(new Invoice(
      invoice.amount?? 0,
      invoice.status?? InvoiceStatus.SENT,
      this.customerId
    ));

    this.form.reset();
  }

}
