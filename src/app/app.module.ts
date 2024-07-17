import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ProjectService } from './services/project/project.service';
import { HttpService } from './services/rest/http.service';

@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule, CommonModule, AppRoutingModule],
  providers: [HttpService],
  bootstrap: [],
})
export class AppModule {}
