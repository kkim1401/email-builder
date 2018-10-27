import _ from 'lodash';
import { combineReducers } from 'redux';
import * as actions from '../actions/items';

function entities(state = {}, action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case actions.DELETE_ITEM:
      return _.omit(state, [action.payload.id]);
    case actions.UPDATE_ITEM:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          content: action.payload.content,
        },
      };
    default:
      return state;
  }
}

function orderedIds(state = [], action) {
  switch (action.type) {
    case actions.ADD_ITEM:
      return [
        ...state,
        action.payload.id,
      ];
    case actions.DELETE_ITEM:
      return _.reject(state, action.payload.id);
    case actions.REORDER_ITEM:
    // eslint-disable-next-line no-case-declarations
      const newState = _.filter(state, id => id !== action.payload.id);
      newState.splice(action.payload.index, 0, action.payload.id);
      return newState;
    default:
      return state;
  }
}

function selectedId(state = null, action) {
  switch (action.type) {
    case actions.SELECT_ITEM:
      return action.payload.id;
    case actions.CLOSE_FORM:
      return null;
    default:
      return state;
  }
}

export default combineReducers({
  entities,
  orderedIds,
  selectedId,
});
