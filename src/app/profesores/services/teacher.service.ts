import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iteacher } from 'src/app/core/models/teacher-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }


  Getteachers(): Observable<Iteacher[]> {
    return this.http.get<Iteacher[]>(`${environment.api.url}characters/staff/`)
  }
}
