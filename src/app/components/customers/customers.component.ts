import { Component, OnInit } from '@angular/core';
import { CustomerService } from "../../shared/services/customer.service";
import Customer from "../../models/customer.model";
import { ActivatedRoute, Router } from "@angular/router";
import { mergeMap, of } from "rxjs";
import { faArrowLeft, faCircleCheck, faPlus } from "@fortawesome/free-solid-svg-icons";
import { ToastService } from "../../shared/services/toast.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  public readonly plusIcon = faPlus;
  public readonly backIcon = faArrowLeft;

  public customers: Customer[] = [];
  public customerCreation: boolean = false;
  public loading: boolean = true;

  constructor(
    private readonly toastService: ToastService,
    private readonly customerService: CustomerService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.route.data.pipe(
      mergeMap(data => {
        if (!!data['creation']) {
          this.customerCreation = true;
          return of(undefined);
        }

        return this.customerService.getCustomers();
      })
    ).subscribe(customers => {
      this.customers = customers?? this.customers;
      this.loading = false;
    });
  }

  createCustomer(customer: Customer) {
    this.loading = true;

    this.customerService.addCustomer(customer)
      .subscribe(() => {
        this.toastService.showSuccess('Client crée avec succès');
        this.router.navigate(['/']);
      });
  }
}
