import * as PersonActions from './persons.actions';

describe('persons', () => {
  it('should create an instance', () => {
    expect(new PersonActions.loadObligations()).toBeTruthy();
  });
});
