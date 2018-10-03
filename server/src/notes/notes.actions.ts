export const actions = {
  GET_NOTES: 'GET_NOTES',
  GET_NOTE_BY_ID: 'GET_NOTE_BY_ID',
  ADD_NOTE: 'ADD_NOTE',
  UPDATE_NOTE: 'UPDATE_NOTE',
  REMOVE_NOTE: 'REMOVE_NOTE',

  getNotes: notes => ({
    event: actions.GET_NOTES,
    data: notes
  }),

  getNoteById: note => ({
    event: actions.GET_NOTE_BY_ID,
    data: note
  }),

  addNote: note => ({
    event: actions.ADD_NOTE,
    data: note
  })

};