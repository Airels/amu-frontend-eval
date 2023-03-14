import { Component } from '@angular/core';
import { ToastService } from "../../services/toast.service";
import Toast from "../../../models/toast.model";

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.scss']
})
export class ToastContainerComponent {

  constructor(private readonly toastService: ToastService) { }

  getToasts() {
    return this.toastService.getToasts();
  }

  remove(toast: Toast) {
    this.toastService.remove(toast);
  }

  show(element: any) {
    element.show();
  }

}
