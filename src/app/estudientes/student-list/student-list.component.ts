import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Istudent } from 'src/app/core/models/student-interface';
import { StudentsService } from '../services/students.service';
import { StudentNewComponent } from '../student-new/student-new.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  displayedColumns = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<Istudent>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort!: MatSort;

  StudentList: Istudent[] = [];
  constructor(private studentService: StudentsService,
    public dialog: MatDialog) {
    this.GetLocalStudents();
    this.Getstudents();
  }
  
  ngOnInit(): void {
    setTimeout(() => this.dataSource.paginator = this.paginator);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: any) {
    debugger
    filterValue = filterValue.target.value;
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase(); 
    this.dataSource.filter = filterValue;
  }



  GetLocalStudents() {
    var datalist = this.studentService.Getlocalstudents();
    if (datalist != null) {
      datalist.forEach(element => {
        this.StudentList.push(element);
      });
      this.dataSource = new MatTableDataSource(this.StudentList);
    }
  }

  Getstudents() {
    this.studentService.Getstudents().subscribe(response => {
      if (response != null) {
        response.forEach(element => {
          this.StudentList.push(element);
        });
        this.dataSource = new MatTableDataSource(this.StudentList);
      }
    })
  }

  Newstudents() {

    let dialogRef = this.dialog.open(StudentNewComponent, {
      width: "300px"
    });

    dialogRef.afterClosed().subscribe(result => {
      this.StudentList.push(result!);
    });

  }
}
