import _ from 'lodash';
import states from '../constants/states';

const SLICE = states.ITEMS;

export const getItemById = (state, id) => _.get(state, [SLICE, 'entities', id], null);

export const getOrderedIds = state => _.get(state, [SLICE, 'orderedIds']);

export const getOrderedItems = state => _.map(
  getOrderedIds(state),
  id => getItemById(state, id)
);

export const getSelectedId = state => _.get(state, [SLICE, 'selectedId']);
