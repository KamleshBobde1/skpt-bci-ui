
// import { Component, ViewChild, AfterViewInit } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { ToasterComponent } from '../../../shared/toaster/toaster.component';
// import { LoaderComponent } from '../../../shared/loader/loader.component';
// import $ from 'jquery';
// import 'datatables.net-bs5';
// import { CustomerListService } from '../../../services/customer-list.service';

import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';
import { ToasterComponent } from '../../../shared/toaster/toaster.component';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { CustomerListService } from '../../../services/customer-list.service';
import $ from 'jquery';
import 'datatables.net-bs5';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [HttpClientModule, CommonModule, NgFor, ToasterComponent, LoaderComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: [CustomerListService]
})
export class LandingComponent {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent; // Use non-null assertion

  isLoading: boolean = false;
  isDataVisible: boolean = false;
  data: any[] = [];

  constructor(private dataService: CustomerListService) {}

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

  showData() {
    this.isLoading = true;
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        this.isDataVisible = true;
        this.isLoading = false;
        this.initDataTable();
      },
      (error) => {
        this.toaster.showMessage('Failed to fetch data!', 'error', 3000);
        this.isLoading = false;
      }
    );
  }

  ngAfterViewInit() {
    if (this.isDataVisible) {
      this.initDataTable();
    }
  }

  private initDataTable(): void {
    $(document).ready(function () {
      $('#dataTable').DataTable();
    });
  }
}
