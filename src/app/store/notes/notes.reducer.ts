
import * as NotesActions from './notes.actions';
import { Note } from '../../models/note';

export interface NotesState {
  notesList: Array<Note>;
  callInProgress: boolean;
  activeNote: Note;
}

export const initialState: NotesState = {
    notesList: [],
    callInProgress: false,
    activeNote: null
};


export function notesReducer(
  state: NotesState = initialState,
  action: NotesActions.Actions    // USE NotesActions.Actions
): NotesState {
    switch (action.type) {
      case NotesActions.GET_NOTES:
        return {
          ...state,
          callInProgress: true
        };
      case NotesActions.GET_NOTES_SUCCESS:
        return {
          ...state,
          ...{ notesList: action.payload.notes, callInProgress: false }
        };
      case NotesActions.GET_NOTES_FAILURE:
        return {
          ...state,
          ...{ callInProgress: false }
        };
      case NotesActions.SET_ACTIVE_NOTE:
        return {
          ...state,
          ...{
            activeNote: action.payload.note ? action.payload.note : state.notesList[0]
          }
        };
      case NotesActions.ADD_NOTE:
        return {
          ...state,
          ...{ callInProgress: true }
        };
      case NotesActions.ADD_NOTE_SUCCESS:
        return {
          ...state,
          ...{
            notesList: [action.payload.note, ...state.notesList],
            callInProgress: false
          }
        };
      case NotesActions.ADD_NOTE_FAILURE:
        return {
          ...state,
          ...{ callInProgress: false }
        };

      case NotesActions.DELETE_NOTE:
        return {
          ...state,
          ...{ callInProgress: true }
        };
      case NotesActions.DELETE_NOTE_SUCCESS:
        return {
          ...state,
          ...{ notesList: state.notesList.filter(
              note => (note._id !== state.activeNote._id)
            ),
            callInProgress: false
          },
        };
      case NotesActions.DELETE_NOTE_FAILURE:
        return {
          ...state,
          ...{ callInProgress: false }
        };

      // case NotesActions.UPDATE_NOTE:
      //   return {
      //     ...state,
      //     ...{ callInProgress: true }
      //   };

      // case NotesActions.UPDATE_NOTE_SUCCESS:
      // case NotesActions.DELETE_NOTE_FAILURE:
      //   return {
      //     ...state,
      //     ...{ callInProgress: false }
      //   };

      default:
          return state;
    }
}
