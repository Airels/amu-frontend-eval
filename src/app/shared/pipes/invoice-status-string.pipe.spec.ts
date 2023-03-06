import { InvoiceStatusStringPipe } from './invoice-status-string.pipe';
import InvoiceStatus from "../../models/invoice-status.model";

describe('InvoiceStatusStringPipe', () => {

  const pipe = new InvoiceStatusStringPipe();
  const entries = Object.entries(InvoiceStatus);

  it('create an instance', () => {
    const pipe = new InvoiceStatusStringPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform status element into text', () => {
    for (const entry of entries) {
      expect(pipe.transform(<InvoiceStatus>entry[0])).toBe(entry[1]);
    }
  });
});
