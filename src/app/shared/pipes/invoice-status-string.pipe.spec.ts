import { InvoiceStatusStringPipe } from './invoice-status-string.pipe';

describe('InvoiceStatusStringPipe', () => {
  it('create an instance', () => {
    const pipe = new InvoiceStatusStringPipe();
    expect(pipe).toBeTruthy();
  });
});
