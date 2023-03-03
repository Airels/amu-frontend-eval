export default class Customer {
  id?: number;
  fullName?: string;
  email?: string;

  constructor(fullname: string, email: string) {
    this.id = undefined;
    this.fullName = fullname;
    this.email = email;
  }
}
