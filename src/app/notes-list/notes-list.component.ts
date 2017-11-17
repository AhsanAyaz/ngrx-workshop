import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Note } from '../models/note';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { NotesState } from '../store/notes/notes.reducer';
import { selectNotesList, selectActiveNote } from '../store/notes/notes.selectors';
import { SetActiveNote } from '../store/notes/notes.actions';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('200ms', [
          animate('0.3s ease-in', keyframes([
            style({opacity: 0, offset: 0}),
            style({opacity: 1, offset: 1.0}),
          ]))]), {optional: true}),
        query(':leave', style({ opacity: 1 }), {optional: true}),
        query(':leave', stagger('200ms', [
          animate('0.3s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0, transform: 'translateY(-100%)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]
})
export class NotesListComponent implements OnInit {
  $notesList: Observable<Array<Note>>;
  $activeNote: Observable<Note>;
  constructor(
    private store: Store<NotesState>
  ) {
  }

  ngOnInit() {
    this.$notesList = this.store.select(selectNotesList);
    this.$activeNote = this.store.select(selectActiveNote);
  }

  /**
   * @author Ahsan Ayaz
   * @desc This is triggered when a note item is clicked from the list.
   * Emits an event above so the parent can perform appropriate action.
   * @param note - the note on which the user clicked to show its contents
   */
  showNote(note: Note) {
    this.store.dispatch(new SetActiveNote({
      note
    }));
  }

}
