import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Note } from '../models/note';
import { Store } from '@ngrx/store';
import { NotesState } from '../store/notes/notes.reducer';
import { Observable } from 'rxjs/Observable';
import { SetActiveNote, AddNote, DeleteNote } from '../store/notes/notes.actions';
import { selectActiveNote, selectCallInProgress } from '../store/notes/notes.selectors';

@Component({
  selector: 'app-notes-header',
  templateUrl: './notes-header.component.html',
  styleUrls: ['./notes-header.component.scss']
})
export class NotesHeaderComponent implements OnInit {
  $callInProgress: Observable<boolean>;
  $activeNote: Observable<Note>;
  constructor(
    private store: Store<NotesState>
  ) { }

  ngOnInit() {
    this.$activeNote = this.store.select(selectActiveNote);
    this.$callInProgress = this.store.select(selectCallInProgress);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggers when the add button is clicked.
   * It emits a new note above the component tree
   */
  addNote() {
    this.store.dispatch(new AddNote({
      note: {
        text: '',
        cts: new Date(),
        active: false,
        selected: false
      }
    }));
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggers when the delete button is clicked from the top header
   */
  deleteSelectedNote() {
    this.$activeNote
    .first()
    .subscribe(activeNote => {
      this.store.dispatch(new DeleteNote({
        note: activeNote
      }));
    });
  }

}
