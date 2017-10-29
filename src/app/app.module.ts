import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MomentModule } from 'angular2-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesHeaderComponent } from './notes-header/notes-header.component';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { NotesService } from './services/notes.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesHeaderComponent,
    NotesEditorComponent,
    NotesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MomentModule
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
