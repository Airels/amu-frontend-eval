import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import Invoice from "../../models/invoice.model";
import { map, Observable } from "rxjs";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  public readonly root = `${environment.API_URL}/invoices`;
  public readonly headers = {
    "Content-Type": "application/json",
    apiKey: environment.API_KEY,
    Prefer: "return=representation"
  };

  constructor(private readonly http: HttpClient) { }

  public getInvoicesFromCustomer(customerId: number): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.root}?customer_id=eq.${customerId}`, {
      headers: this.headers
    });
  }

  public addInvoice(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice[]>(this.root, invoice, {
      headers: this.headers
    }).pipe(map(invoices => invoices[0]))
  }
}
