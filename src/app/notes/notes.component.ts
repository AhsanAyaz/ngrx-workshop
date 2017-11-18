import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { NotesState } from '../store/notes/notes.reducer';
import { GetNotes, SetActiveNote } from '../store/notes/notes.actions';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  constructor(
    private store: Store<NotesState>
  ) { }

  ngOnInit() {
    this.store.dispatch(new GetNotes());
  }
}
