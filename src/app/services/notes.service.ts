import 'rxjs/add/observable/of';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../models/note';

@Injectable()
export class NotesService {

  constructor() { }

  /**
   * @author Ahsan Ayaz
   * @desc This returns the notes to be shown in the notes app.
   * @return {Observable<Array<Note>>} - an observable of the notes array which contains
   * individual notes (Note)
   */
  getNotes(): Observable<Array<Note>> {
    const today = new Date();
    const notes: Array<Note> = [{
      text: 'Sample text 1',
      active: false,
      selected: false,
      cts: new Date(Date.now() - 2e7) // 6 hours
    }, {
      text: 'My Note 2',
      active: false,
      selected: false,
      cts: new Date(2017, today.getMonth(), today.getDate() - 1)
    }, {
      text: 'My open source contributions',
      active: false,
      selected: false,
      cts: new Date(2017, today.getMonth(), today.getDate() - 2)
    }, {
      text: 'Angular is <3',
      active: false,
      selected: false,
      cts: new Date(2017, today.getMonth(), today.getDate() - 3)
    }];
    return Observable.of(notes).delay(400);
  }

}
