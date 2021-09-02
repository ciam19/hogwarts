import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () => import('./personajes/characters.module').then(m => m.charactersModule),
    //canActivate: [AuthGuard, ComputerGuard]
  },
  {
    path: 'students',
    loadChildren: () => import('./estudientes/estudientes.module').then(m => m.studentsModule),
    //canActivate: [AuthGuard, ComputerGuard]
  },
  {
    path: 'teachers',
    loadChildren: () => import('./profesores/profesores.module').then(m => m.ProfesoresModule),
    //canActivate: [AuthGuard, ComputerGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
