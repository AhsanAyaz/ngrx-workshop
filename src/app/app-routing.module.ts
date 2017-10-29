import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [{
  path: 'notes',
  component: NotesComponent
}, {
  path: '**',
  redirectTo: 'notes'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
