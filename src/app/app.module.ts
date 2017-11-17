import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MomentModule } from 'angular2-moment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { NotesHeaderComponent } from './notes-header/notes-header.component';
import { NotesEditorComponent } from './notes-editor/notes-editor.component';
import { NotesService } from './services/notes.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { notesReducer } from './store/notes/notes.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesHeaderComponent,
    NotesEditorComponent,
    NotesListComponent
  ],
  imports: [
    StoreModule.forRoot({ notes: notesReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MomentModule,
    HttpClientModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [
    NotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
