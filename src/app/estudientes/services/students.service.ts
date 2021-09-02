import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatus } from 'src/app/core/models/status-interface';
import { Istudent } from 'src/app/core/models/student-interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  studentList: Istudent[] = [];
  constructor(private http: HttpClient) { }


  Getstudents(): Observable<Istudent[]> {
    return this.http.get<Istudent[]>(`${environment.api.url}characters/students/`)
  }

  Getlocalstudents(): Istudent[] {
    return JSON.parse(localStorage.getItem("students")!);
  }

  Newstudents(student: Istudent): IStatus {
    debugger
    try {
      var datalist = this.Getlocalstudents();
      if (datalist != null) {
        datalist.forEach(element => {
          this.studentList.push(element);
        });
      }
      this.studentList.push(student);

      window.localStorage.setItem("students", JSON.stringify(this.studentList))
      return { status: true, message: "Se insertó nuevo registro" }
    }
    catch {
      return { status: true, message: "Error insertando nuevo registro" }
    }
  }
}
