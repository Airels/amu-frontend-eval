import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceStatusStringPipe } from "./pipes/invoice-status-string.pipe";
import { LoadingComponent } from "./components/loading/loading.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

const SHARED_MODULES = [
  FontAwesomeModule,
  RouterModule,
  ReactiveFormsModule
];

const DECLARATIONS = [
  LoadingComponent,
  InvoiceStatusStringPipe
];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...DECLARATIONS,
    ...SHARED_MODULES
  ]
})
export class SharedModule { }
