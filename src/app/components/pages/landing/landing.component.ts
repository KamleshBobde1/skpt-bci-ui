import { Component, ViewChild } from '@angular/core';
import { ToasterComponent } from '../../../shared/toaster/toaster.component';
import { LoaderComponent } from '../../../shared/loader/loader.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ToasterComponent, LoaderComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent; // Use non-null assertion

  isLoading: boolean = false;

  showSuccess() {
    this.toaster.showMessage('Operation successful!', 'success', 3000);
  }

  showFailure() {
    this.toaster.showMessage('Operation failed!', 'error', 3000);
  }

  toggleLoader() {
    this.isLoading = true;
  }

  hideLoader() {
    this.isLoading = false;
  }
}
