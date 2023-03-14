import { Injectable } from '@angular/core';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

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

  showSuccess(body: string, options: any = {}): any {
    this.show(body, {
      className: 'bg-success text-white',
      icon: faCircleCheck,
      ...options
    })
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
