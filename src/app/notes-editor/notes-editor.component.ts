import { Component, OnInit } from '@angular/core';
// import { Note } from '../models/note';
// import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
// import { NotesState } from '../store/notes/notes.reducer';
// import { selectActiveNote } from '../store/notes/notes.selectors';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.scss']
})
export class NotesEditorComponent implements OnInit {
  // $activeNote: Observable<Note>;
  constructor(
    // private store: Store<NotesState>
  ) { }

  ngOnInit() {
    // this.$activeNote = this.store.select(selectActiveNote);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggered when the text of the input changes.
   * Saves the text to the server
   */
  onInputChange(noteText: string = '') {

  }

}
