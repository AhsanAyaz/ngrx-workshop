import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesState, initialState } from './notes.reducer';
import { Note } from '../../models/note';

export const selectNotes = createFeatureSelector<NotesState>('notes');

export const selectNotesList = createSelector(
  selectNotes, (state: NotesState = initialState): Array<Note> => state.notesList
);

export const selectActiveNote = createSelector(
  selectNotes, (state: NotesState = initialState): Note => state.activeNote
);

export const selectCallInProgress = createSelector(
  selectNotes, (state: NotesState = initialState): boolean => state.callInProgress
);
