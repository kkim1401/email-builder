import uuidv4 from 'uuid/v4';

export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const REORDER_ITEM = 'REORDER_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const CLOSE_FORM = 'CLOSE_FORM';
export const OPEN_FORM = 'OPEN_FORM';
export const TOGGLE_FORM = 'TOGGLE_FORM';

const getInitialItem = type => ({
  selected: false,
  type,
  content: '',
  id: uuidv4(),
})

export const addItem = ({ type }) => ({
  payload: getInitialItem(type),
  type: ADD_ITEM,
});

export const deleteItem = id => ({
  payload: { id },
  type: DELETE_ITEM,
});

export const reorderItem = ({ id, index }) => ({
  payload: { id, index },
  type: REORDER_ITEM,
});

export const updateItem = ({ content, id }) => ({
  payload: { content, id },
  type: UPDATE_ITEM,
});

export const closeForm = () => ({
  type: CLOSE_FORM,
});

export const openForm = () => ({
  type: OPEN_FORM,
});

export const toggleForm = () => ({
  type: TOGGLE_FORM,
});

export const selectItem = ({ id }) => ({
  payload: { id },
  type: SELECT_ITEM,
})
