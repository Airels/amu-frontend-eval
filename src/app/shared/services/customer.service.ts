import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import Customer from "../../models/customer.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public readonly root = `${environment.API_URL}/customers`;
  public readonly headers = {
    "Content-Type": "application/json",
    apiKey: environment.API_KEY,
    Prefer: "return=representation"
  };

  constructor(private readonly http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.root, {
      headers: this.headers
    });
  }

  public getCustomer(id: number): Observable<Customer> {
    return this.http.get<Customer[]>(`${this.root}?id=eq.${id}`, {
      headers: this.headers
    }).pipe(map(customers => customers[0]))
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer[]>(this.root, customer, {
      headers: this.headers
    }).pipe(map(customers => customers[0]))
  }
}
