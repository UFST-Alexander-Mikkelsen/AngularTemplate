import * as NotesActions from './notes.actions';

describe('notes', () => {
  it('should create an instance', () => {
    expect(new NotesActions.loadNotes()).toBeTruthy();
  });
});
