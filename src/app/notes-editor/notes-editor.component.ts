import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from '../models/note';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.scss']
})
export class NotesEditorComponent implements OnInit {
  @Input() note: Note;
  @Output() onTextFocus = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * @desc This is triggered when the textarea is focused.
   * This emits onTextFocus allowing the parent component to perform appropriate
   * action.
   */
  focusTextHandler() {
    this.onTextFocus.emit();
  }

}
