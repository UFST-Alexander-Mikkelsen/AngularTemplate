import * as ObligationActions from './obligations.actions';

describe('Obligation', () => {
  it('should create an instance', () => {
    expect(new ObligationActions.loadObligations()).toBeTruthy();
  });
});
