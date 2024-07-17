import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LandingComponent } from './components/pages/landing/landing.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent }, // Add route for HomeComponent
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'landing', component: LandingComponent }, // Add route for ResetPasswordComponent
  { path: '**', redirectTo: '' }
];
