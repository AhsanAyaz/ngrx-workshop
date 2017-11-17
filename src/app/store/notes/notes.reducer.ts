const dummyData = [
  {
     'text': 'Angular Pakistan\'s event at 18th Nov',
     '_id': '5a08684f6eef8c3f27453022',
     'cts': '2017-11-12T15:27:11.083Z',
     'active': false,
     'selected': false
  },
  {
     'text': 'Favorite fruits? ',
     '_id': '5a0865706eef8c3f2745301d',
     'cts': '2017-11-12T15:14:55.892Z',
     'active': false,
     'selected': false
  },
  {
     'text': 'Test record with some value',
     '_id': '5a085a676eef8c3f2745301c',
     'cts': '2017-11-12T14:27:50.931Z',
     'active': false,
     'selected': false
  },
  {
     'text': 'Pickup uncle from the airport on 15th December @ 3:05PM',
     '_id': '5a08530c68a73d36b4da2d81',
     'cts': '2017-11-12T13:56:27.835Z',
     'active': false,
     'selected': false
  },
  {
     'text': 'My open source contributions',
     '_id': '5a061a59b7194a0fc23a1edd',
     'cts': '2017-11-08T19:00:00Z',
     'active': false,
     'selected': false
  },
  {
     'text': 'Angular is <3',
     '_id': '5a061a64b7194a0fc23a1ede',
     'cts': '2017-11-07T19:00:00Z',
     'active': false,
     'selected': false
  }
];


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
          ...{ notesList: dummyData }
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
          ...{
            notesList: [action.payload.note, ...state.notesList]
          }
        };
      case NotesActions.DELETE_NOTE:
        return {
          ...state,
          ...{ notesList: state.notesList.filter(
            note => (note._id !== state.activeNote._id)
          ) }
        };
      default:
          return state;
    }
}
