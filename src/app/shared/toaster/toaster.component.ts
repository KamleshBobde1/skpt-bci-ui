import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toaster_Configs } from '../../utils/application-constants';

@Component({
  selector: 'app-toaster',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent {
  message: string = '';
  isSuccess: boolean = true;
  isVisible: boolean = false;

  showMessage(message: string, type: 'success' | 'error', timeout: number = Toaster_Configs.TIMEOUT) {
    this.message = message;
    this.isSuccess = type === 'success';
    this.isVisible = true;

    setTimeout(() => {
      this.isVisible = false;
    }, timeout);
  }

  closeToaster() {
    this.isVisible = false;
  }
}
