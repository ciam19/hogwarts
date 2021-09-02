import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Istudent } from 'src/app/core/models/student-interface';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.scss']
})
export class StudentNewComponent implements OnInit {

  constructor(private studentservice: StudentsService,
    public dialogRef: MatDialogRef<StudentNewComponent>,
    private snackBar: MatSnackBar) { }

  studentform = new FormGroup({
    name: new FormControl(''),
    patronus: new FormControl(''),
    age: new FormControl(''),
    image: new FormControl(''),
  });

  ngOnInit(): void {
  }

  SaveNewstudent() {
    if (this.studentform.valid) {
      var messageInsert = this.studentservice.Newstudents(<Istudent>this.studentform.value).message
      this.snackBar.open(messageInsert, '', {
        duration: 5000
      });
      debugger
      this.dialogRef.close(<Istudent>this.studentform.value);
    }
  }
}
