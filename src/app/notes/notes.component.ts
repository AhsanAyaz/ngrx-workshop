import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NotesService } from '../services/notes.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notesList: Note[] = [];
  activeNote: Note = null;
  callInProgress = false;
  updateSubs: Subscription;
  constructor(
    private notesService: NotesService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.callInProgress = true;
    this.notesService.getNotes()
      .first()
      .subscribe(notes => {
        this.notesList = notes;
        this.setActiveNote(this.notesList[0]);
        this.callInProgress = false;
      });
  }

  /**
   * @author Ahsan Ayaz
   * @desc Adds the passed note to the list at top.
   * Also selects the added note
   * @param note - the note to be added to the notes list
   */
  addNewNote(note: Note) {
    this.callInProgress = true;
    this.notesService.addNewNote(note)
      .first()
      .subscribe((savedNote: Note) => {
        this.notesList.unshift(savedNote);
        this.setActiveNote(this.notesList[0]);
        this.callInProgress = false;
      });
  }

  /**
   * @author Ahsan Ayaz
   * @desc Selects the active note (highlights on the left bar)
   */
  selectActiveNote() {
    this.activeNote.selected = true;
  }

  /**
   * @author Ahsan Ayaz
   * @desc Unselects the active note (when the notes text area is selected)
   */
  unselectActiveNote() {
    this.activeNote.selected = false;
  }

  /**
   * @author Ahsan Ayaz
   * @desc The function triggers when a note is selected from the left panel.
   * This sets the clicked note as active note as well as highlights it
   * @param note - the note clicked / or the note to be set active
   * @param select - whether to highlight the selected note or not
   */
  setActiveNote(note: Note, select: boolean = false) {
    if (note !== this.activeNote) {
      if (this.activeNote && this.activeNote.text === '') {
        this.deleteNote(this.activeNote);
      }
    }
    this.activeNote = note;
    this.notesList.forEach(noteItem => {
      noteItem.active = (note === noteItem);
      noteItem.selected = false;
    });
    if (select) {
      this.selectActiveNote();
    }
  }

  /**
   * @author Ahsan Ayaz
   * @desc Deletes the note provided from the list.
   * Sets the top most as active from the remaining list (if any)
   * @param note - the note to delete
   */
  deleteNote(note: Note) {
    this.callInProgress = true;
    this.notesService.deleteNote(note)
      .first()
      .subscribe(res => {
        this.callInProgress = false;
        if (res.ok === 1 && res.n === 1) {  // if the record was actually deleted
          this.toastr.success('Note deleted!');
          this.notesList = this.notesList.filter(noteItem => (noteItem !== note));
          this.activeNote = null;
          if (this.notesList.length) {
            this.setActiveNote(this.notesList[0]);
          }
        }
      });
  }

  /**
   * @author Ahsan Ayaz
   * @desc Updates the note.
   * Sends the update note to the server to save it
   * @param noteText - the updated text from the editor
   */
  updateNote(noteText: string) {
    if (this.updateSubs) {
      this.updateSubs.unsubscribe();
      this.updateSubs = null;
    }
    this.updateSubs = this.notesService.updateNote({ ...this.activeNote, ...{ text: noteText }} )
      .first()
      .subscribe(note => {
        this.activeNote = Object.assign(this.activeNote, note);
      });
  }
}
