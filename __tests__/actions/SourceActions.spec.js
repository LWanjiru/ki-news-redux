// import Enzyme from 'enzyme';
import * as actions from '../../src/actions/SourceActions';
import * as types from '../../src/constants/ActionTypes';

describe('actions', () => {
  it('should create an action to get a source', () => {
    const data = { id: 'abc-news', name: 'ABC News', url: 'http://abcnews.go.com' };
    const expecedAction = {
      type: types.GET_SOURCE,
      data,
    };
    expect(actions.getSource(data)).toEqual(expecedAction);
  });
});
