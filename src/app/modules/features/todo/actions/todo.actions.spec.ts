import * as ObligationActions from './todo.actions';

describe('Obligation', () => {
  it('should create an instance', () => {
    expect(new ObligationActions.loadTodos()).toBeTruthy();
  });
});
