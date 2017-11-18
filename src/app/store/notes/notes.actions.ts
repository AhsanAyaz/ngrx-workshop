import { Action } from '@ngrx/store';
import { Note } from '../../models/note';

export const GET_NOTES =                        '[Notes] GetNotes';
export const GET_NOTES_SUCCESS =                '[Notes] GetNotesSuccess';
export const GET_NOTES_FAILURE =                '[Notes] GetNotesFailure';
export const SET_ACTIVE_NOTE =                  '[Notes] SetActiveNote';
export const DELETE_NOTE =                      '[Notes] DeleteNote';
export const DELETE_NOTE_SUCCESS =              '[Notes] DeleteNoteSuccess';
export const DELETE_NOTE_FAILURE =              '[Notes] DeleteNoteFailure';
export const ADD_NOTE =                         '[Notes] AddNote';
export const ADD_NOTE_SUCCESS =                 '[Notes] AddNoteSuccess';
export const ADD_NOTE_FAILURE =                 '[Notes] AddNoteFailure';
export const UPDATE_NOTE =                '[Notes] UpdateNote';
export const UPDATE_NOTE_SUCCESS =        '[Notes] UpdateNoteSuccess';
export const UPDATE_NOTE_FAILURE =        '[Notes] UpdateNoteFailure';


export class UpdateNote implements Action {
  readonly type = UPDATE_NOTE;

  constructor(public payload: { note: Note }) { }
}

export class UpdateNoteSuccess implements Action {
    readonly type = UPDATE_NOTE_SUCCESS;

    constructor(public payload: { note: Note }) { }
}

export class UpdateNoteFailure implements Action {
    readonly type = UPDATE_NOTE_FAILURE;

    constructor(public payload: { error: string }) { }
}

export class DeleteNote implements Action {
  readonly type = DELETE_NOTE;

  constructor(public payload: { note: Note }) { }
}

export class DeleteNoteSuccess implements Action {
    readonly type = DELETE_NOTE_SUCCESS;

    constructor(public payload: any) { }
}

export class DeleteNoteFailure implements Action {
    readonly type = DELETE_NOTE_FAILURE;

    constructor(public payload: { error: string; }) { }
}

export class AddNote implements Action {
  readonly type = ADD_NOTE;

  constructor(public payload: { note: Note }) { }
}

export class AddNoteSuccess implements Action {
    readonly type = ADD_NOTE_SUCCESS;

    constructor(public payload: { note: Note }) { }
}

export class AddNoteFailure implements Action {
    readonly type = ADD_NOTE_FAILURE;

    constructor(public payload: { error: string }) { }
}

export class SetActiveNote implements Action {
  readonly type = SET_ACTIVE_NOTE;

  constructor(public payload: { note?: Note }) { }
}

export class GetNotes implements Action {
  readonly type = GET_NOTES;
}

export class GetNotesSuccess implements Action {
    readonly type = GET_NOTES_SUCCESS;

    constructor(public payload: { notes: Array<Note>}) { }
}

export class GetNotesFailure implements Action {
    readonly type = GET_NOTES_FAILURE;

    constructor(public payload: { error: string }) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= GetNotes
| GetNotesSuccess
| GetNotesFailure
| SetActiveNote
| AddNote
| AddNoteSuccess
| AddNoteFailure
| DeleteNote
| DeleteNoteSuccess
| DeleteNoteFailure
| UpdateNote
| UpdateNoteSuccess
| UpdateNoteFailure
;
