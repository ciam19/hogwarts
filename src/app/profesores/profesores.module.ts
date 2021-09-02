import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfesoresRoutingModule } from './profesores-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    TeacherListComponent
  ],
  imports: [
    CommonModule,
    ProfesoresRoutingModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class ProfesoresModule { }
