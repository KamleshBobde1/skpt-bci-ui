import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from '../utils/api-url';

@Injectable({
  providedIn: 'root',
})
export class CustomerListService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any[]> {
    return this.http.get<any[]>(API_URL.GET_ALL_PROJECTS);
  }
}
