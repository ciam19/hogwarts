import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudientesRoutingModule } from './estudientes-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  declarations: [
    StudentListComponent,
    StudentNewComponent
  ],
  imports: [
    CommonModule,
    EstudientesRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
  MatSortModule   ]
})
export class studentsModule { }
