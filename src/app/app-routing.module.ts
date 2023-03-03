import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from "./components/customers/customers.component";
import { CustomerDetailsComponent } from "./components/customers/customer-details/customer-details.component";
import { InvoicesComponent } from "./components/invoices/invoices.component";

const routes: Routes = [
  {
    path: '',
    component: CustomersComponent
  },
  {
    path: 'create',
    component: CustomersComponent,
    data: {
      creation: true
    }
  },
  {
    path: ':idCustomer',
    component: CustomerDetailsComponent
  },
  {
    path: ':idCustomer/invoices',
    redirectTo: ':idCustomer'
  },
  {
    path: ':idCustomer/invoices/add',
    component: InvoicesComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
