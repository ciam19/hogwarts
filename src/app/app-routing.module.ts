import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters/list',
    pathMatch:'full'
},
  {
    path: 'characters',
    loadChildren: () => import('./personajes/characters.module').then(m => m.charactersModule),
  },
  {
    path: 'students',
    loadChildren: () => import('./estudientes/estudientes.module').then(m => m.studentsModule),
  },
  {
    path: 'teachers',
    loadChildren: () => import('./profesores/profesores.module').then(m => m.ProfesoresModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
