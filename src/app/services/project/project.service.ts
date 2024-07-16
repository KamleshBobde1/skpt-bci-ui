import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../rest/http.service';
import { API_URL } from '../../utils/api-url';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private httpService: HttpService) {}

  getAllProjects(): Observable<any> {
    return this.httpService.get(API_URL.GET_ALL_PROJECTS);
  }
}
