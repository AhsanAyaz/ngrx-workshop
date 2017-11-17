import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-notes-header',
  templateUrl: './notes-header.component.html',
  styleUrls: ['./notes-header.component.scss']
})
export class NotesHeaderComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggers when the add button is clicked.
   * It emits a new note above the component tree
   */
  addNote() {
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggers when the delete button is clicked from the top header
   */
  deleteSelectedNote() {
  }

}
