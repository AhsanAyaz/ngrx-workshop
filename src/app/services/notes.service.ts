import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../models/note';
import { HttpClient } from '@angular/common/http';
import { NOTES_APP_CONFIG } from '../../config/notes-app.config';

@Injectable()
export class NotesService {
  notesApiUrl = `${NOTES_APP_CONFIG.apiBaseUrl}/notes`;
  constructor(
    private http: HttpClient
  ) { }

  /**
   * @author Ahsan Ayaz
   * @desc This returns the notes to be shown in the notes app.
   * @return {Observable<Array<Note>>} - an observable of the notes array which contains
   * individual notes (Note)
   */
  getNotes(): Observable<Array<Note>> {
    return this.http.get<{notes: Array<Note>}>(`${this.notesApiUrl}`)
      .map(res => res.notes);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Sends the save new note call to the server.
   * @param note - the new note to be saved
   * @return {Observable<Note>} containing the note received from the server
   * which we added (contains the _id of the note too)
   */
  addNewNote(note: Note): Observable<Note> {
    return this.http.post<{note: Note}>(`${this.notesApiUrl}`, { ...note })
      .map(res => res.note);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Deletes the note using the server api
   * @param note - the note to be deleted
   * @return {Observable} - contains properties to identify if the note was deleted or not
   */
  deleteNote(note: Note): Observable<{ ok: number, n: number }> {
    return this.http.delete<{ result: { ok: number, n: number }}>(`${this.notesApiUrl}/${note._id}`)
      .map(res => res.result);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Sends the update note call to the server resulting in an updated note
   * saved on the db.
   * @param note - the note to update
   * @return {Observable<Note>} contains the updated note that was saved on the server
   */
  updateNote(note: Note): Observable<Note> {
    return this.http.patch<{note: Note}>(`${this.notesApiUrl}/${note._id}`, { ...note })
      .map(res => res.note);
  }

  getCount(text: string) {
    // there could be an http call here
    const wsRegex = /\s+/gi;
    const wordCount = text.trim().replace(wsRegex, ' ').split(' ').length;
    const charCount = text.length;
    return Observable.of(wordCount);
  }

}
