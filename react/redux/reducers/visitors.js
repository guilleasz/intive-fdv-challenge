import { SET_VISITORS, CHANGE_VISITOR } from '../constants';

const initialState = {
  list: JSON.parse(localStorage.getItem('list')) || [],
  selected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VISITORS:
      return {
        ...state,
        list: action.visitors,
      };
    case CHANGE_VISITOR:
      return {
        ...state,
        selected: action.visitor,
      };
    default:
      return state;
  }
};
