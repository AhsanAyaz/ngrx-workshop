// import { Action } from '@ngrx/store';
// import { Note } from '../../models/note';

// export const GET_NOTES =                        '[Notes] GetNotes';
// export const SET_ACTIVE_NOTE =                  '[Notes] SetActiveNote';
// export const ADD_NOTE =                         '[Notes] AddNote';
// export const DELETE_NOTE =                      '[Notes] DeleteNote';

// export class DeleteNote implements Action {
//   readonly type = DELETE_NOTE;
// }

// export class AddNote implements Action {
//   readonly type = ADD_NOTE;

//   constructor(public payload: { note: Note}) { }
// }

// export class SetActiveNote implements Action {
//   readonly type = SET_ACTIVE_NOTE;

//   constructor(public payload: { note?: Note }) { }
// }

// export class GetNotes implements Action {
//   readonly type = GET_NOTES;
// }

// /**
//  * Export a type alias of all actions in this action group
//  * so that reducers can easily compose action types
//  */
// export type Actions
// = GetNotes
// | SetActiveNote
// | AddNote
// | DeleteNote;
