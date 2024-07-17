import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Updated to use CSS
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: [''],
      password: [''],
    });
  }

  onSubmit(): void {
    console.log(this.loginForm.value);
    // Navigate to the Home Page
    this.router.navigate(['/home']);
  }

  navigateToResetPassword(): void {
    this.router.navigate(['/reset-password']); // Navigate to the Reset Password Page
  }
}
