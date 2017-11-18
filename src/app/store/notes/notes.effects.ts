
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/of';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/Observable';

// import { Actions, Effect, toPayload } from '@ngrx/effects';
// import * as NotesActions from './notes.actions';
// import { NotesService } from '../../services/notes.service';

// @Injectable()
// export class NotesEffects {
//   /**
//    * @author Ahsan Ayaz
//    * @desc Fetches the notes from the server
//    */
//   @Effect() $getNotes = this.actions$.ofType(NotesActions.GET_NOTES)
//     .map(toPayload)
//     .mergeMap(payload => {
//       return this.notesService.getNotes();
//     })
//     .mergeMap(notes => {
//       // on success, dispatch success and set first item active
//       return [
//         new NotesActions.GetNotesSuccess({
//           notes
//         }),
//         new NotesActions.SetActiveNote({})
//       ];
//     })
//     .catch(() => {
//       return Observable.of(new NotesActions.GetNotesFailure({
//         error: 'Could not fetch notes'
//       }));
//   });

//   /**
//    * @author Ahsan Ayaz
//    * @desc Adds the note to the server
//    */
//   @Effect() $addNote = this.actions$.ofType(NotesActions.ADD_NOTE)
//   .map(toPayload)
//   .mergeMap(payload => {
//     return this.notesService.addNewNote(payload.note);
//   })
//   .mergeMap(note => {
//     // on success, dispatch success and set first item active
//     return [
//       new NotesActions.AddNoteSuccess({
//         note
//       }),
//       new NotesActions.SetActiveNote({})
//     ];
//   })
//   .catch(() => {
//     return Observable.of(new NotesActions.AddNoteFailure({
//       error: 'Could not add note'
//     }));
//   });

//   /**
//    * @author Ahsan Ayaz
//    * @desc Deletes the note from the server
//    */
//   @Effect() $deleteNote = this.actions$.ofType(NotesActions.DELETE_NOTE)
//   .map(toPayload)
//   .mergeMap(payload => {
//     return this.notesService.deleteNote(payload.note);
//   })
//   .mergeMap(data => {
//     // on success, dispatch success and set first item active
//     return [
//       new NotesActions.DeleteNoteSuccess({
//         data
//       }),
//       new NotesActions.SetActiveNote({})
//     ];
//   })
//   .catch(() => {
//     return Observable.of(new NotesActions.AddNoteFailure({
//       error: 'Could not delete note'
//     }));
//   });

//   constructor(
//     private actions$: Actions,
//     private notesService: NotesService
//   ) { }
// }
