import { Component, ViewChild } from '@angular/core';
import { LoaderService } from '../../../services/loader/loader.service';
import { ProjectService } from '../../../services/project/project.service';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { ToasterComponent } from '../../../shared/toaster/toaster.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [ToasterComponent, LoaderComponent],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  projects: any[] = [];

  constructor(
    private projectService: ProjectService,
    private loaderService: LoaderService
  ) {}

  showSuccess() {
    this.toaster.showMessage('Operation successful!', 'success', 3000);
  }

  showFailure() {
    this.toaster.showMessage('Operation failed!', 'error', 3000);
  }

  toggleLoader() {
    this.loaderService.showLoader();
    setTimeout(() => this.loaderService.hideLoader(), 3000); // Simulating a delay
  }

  getAllProjects() {
    this.loaderService.showLoader();
    this.projectService.getAllProjects().subscribe(
      (data) => {
        this.projects = data;
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
