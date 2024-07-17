import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderService } from '../../services/loader/loader.service';
import { ProjectService } from '../../services/project/project.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { ToasterComponent } from '../../shared/toaster/toaster.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ToasterComponent, LoaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor(
    private loaderService: LoaderService,
    private projectService: ProjectService
  ) // private projectService: HttpService

  {}

  showSuccessToaster() {
    this.toaster.showMessage('Operation was successful!', 'success');
  }

  showFailureToaster() {
    this.toaster.showMessage('Operation failed!', 'error');
  }

  showLoader() {
    this.loaderService.showLoader();
    setTimeout(() => this.loaderService.hideLoader(), 3000); // Simulating a delay
  }

  callApi() {
    this.loaderService.showLoader();
    this.projectService.getAllProjects().subscribe(
      (data) => {
        console.log('Projects fetched successfully!', data);
        this.loaderService.hideLoader();
        this.toaster.showMessage(
          'Projects fetched successfully!',
          'success',
          5000
        );
      },
      (error) => {
        console.error('Error fetching projects', error);
        this.loaderService.hideLoader();
        this.toaster.showMessage('Error fetching projects!', 'error', 5000);
      }
    );
  }
}
