import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.scss']
})
export class NotesEditorComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggered when the text of the input changes.
   * Saves the text to the server
   */
  onInputChange(noteText: string = '') {

  }

}
