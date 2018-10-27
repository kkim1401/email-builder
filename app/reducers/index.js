// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import { connectRouter } from 'connected-react-router';
import states from '../constants/states';
import items from './items';

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {});

  return connectRouter(history)(
    combineReducers({
      [states.ITEMS]: items,
      form: formReducer,
      router: routerReducer }),
  );
}
