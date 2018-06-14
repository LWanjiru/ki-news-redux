import * as types from '../constants/ActionTypes';

export function getSource(data) {
  return {
    type: types.GET_SOURCE,
    data,
  };
}
