import { Pipe, PipeTransform } from '@angular/core';
import InvoiceStatus from "../../models/invoice-status.model";

@Pipe({
  name: 'invoiceStatusString'
})
export class InvoiceStatusStringPipe implements PipeTransform {

  transform(status: InvoiceStatus): string {
    const entries = Object.entries(InvoiceStatus);
    for (let entry of entries) {
      if (status === entry[0]) {
        return entry[1];
      }
    }

    return 'Statut inconnu';
  }

}
