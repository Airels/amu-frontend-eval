import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceStatusStringPipe } from "./pipes/invoice-status-string.pipe";
import { LoadingComponent } from "./components/loading/loading.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { ToastContainerComponent } from './components/toast/toast-container.component';
import { NgbToast } from "@ng-bootstrap/ng-bootstrap";

const SHARED_MODULES = [
  FontAwesomeModule,
  RouterModule,
  ReactiveFormsModule
];

const DECLARATIONS = [
  LoadingComponent,
  InvoiceStatusStringPipe,
  ToastContainerComponent
];

@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    CommonModule,
    NgbToast,
    ...SHARED_MODULES
  ],
  exports: [
    ...DECLARATIONS,
    ...SHARED_MODULES
  ]
})
export class SharedModule { }
