import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { SharedModule } from "./shared/shared.module";
import { CustomersComponent } from "./components/customers/customers.component";
import { CustomerComponent } from "./components/customers/customer/customer.component";
import { CustomerDetailsComponent } from "./components/customers/customer-details/customer-details.component";
import { CustomerFormComponent } from "./components/customers/customer-form/customer-form.component";
import { CustomerListComponent } from "./components/customers/customer-list/customer-list.component";
import { InvoicesComponent } from "./components/invoices/invoices.component";
import { InvoiceFormComponent } from "./components/invoices/invoice-form/invoice-form.component";
import { InvoiceListComponent } from "./components/invoices/invoice-list/invoice-list.component";
registerLocaleData(localeFr);

const COMPONENTS = [
  CustomersComponent,
  CustomerComponent,
  CustomerDetailsComponent,
  CustomerFormComponent,
  CustomerListComponent,

  InvoicesComponent,
  InvoiceFormComponent,
  InvoiceListComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
