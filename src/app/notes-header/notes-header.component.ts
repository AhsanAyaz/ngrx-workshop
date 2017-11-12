import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-notes-header',
  templateUrl: './notes-header.component.html',
  styleUrls: ['./notes-header.component.scss']
})
export class NotesHeaderComponent implements OnInit {
  @Input() activeNote: Note;
  @Input() callInProgress: boolean;
  @Output() onAddNote = new EventEmitter<Note>();
  @Output() onDeleteNote = new EventEmitter<Note>();
  constructor() { }

  ngOnInit() {
  }

  addNote() {
    this.onAddNote.emit({
      text: '',
      cts: new Date(),
      active: false,
      selected: false
    });
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggers when the delete button is clicked from the top header
   */
  deleteSelectedNote() {
    this.onDeleteNote.emit(this.activeNote);
  }

}
