// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-reset-password',
//   standalone: true,
//   imports: [],
//   templateUrl: './reset-password.component.html',
//   styleUrl: './reset-password.component.css'
// })
// export class ResetPasswordComponent {

// }

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.resetPasswordForm.valid) {
      console.log(this.resetPasswordForm.value);
      // Logic to handle password reset
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
