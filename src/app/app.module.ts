import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerListComponent } from './components/customers/customer-list/customer-list.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CustomerFormComponent } from './components/customers/customer-form/customer-form.component';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { HttpClientModule } from "@angular/common/http";
import { InvoiceListComponent } from './components/invoices/invoice-list/invoice-list.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from './shared/components/loading/loading.component';
import { CustomerComponent } from "./components/customers/customer/customer.component";
import { InvoiceFormComponent } from './components/invoices/invoice-form/invoice-form.component';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { InvoiceStatusStringPipe } from './shared/pipes/invoice-status-string.pipe';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomersComponent,
    CustomerFormComponent,
    CustomerDetailsComponent,
    InvoiceListComponent,
    LoadingComponent,
    InvoiceFormComponent,
    InvoicesComponent,
    InvoiceStatusStringPipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
