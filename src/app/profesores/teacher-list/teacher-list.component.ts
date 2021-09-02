import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Iteacher } from 'src/app/core/models/teacher-interface';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {
  displayedColumns = ['name', 'patronus', 'age', 'image'];
  dataSource!: MatTableDataSource<Iteacher>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort,{static: false}) sort!: MatSort;

  TeachersList: Iteacher[] = [];
  constructor(private teacherService:TeacherService) {
    this.GetTeachers();
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

  GetTeachers() {
    this.teacherService.Getteachers().subscribe(response => {
      this.dataSource = new MatTableDataSource(response);
    })
  }
}
