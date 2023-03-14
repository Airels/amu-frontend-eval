import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toasts: any[] = [];

  show(body: string, options: any = {}): any {
    const toast = { body, ...options };
    this.toasts.push(toast);
    return toast;
  }

  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  getToasts() {
    return this.toasts;
  }
}
