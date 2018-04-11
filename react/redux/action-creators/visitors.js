import { SET_VISITORS, CHANGE_VISITOR } from '../constants';

export const setVisitors = visitors => ({
  type: SET_VISITORS,
  visitors,
});

export const changeVisitor = visitor => ({
  type: CHANGE_VISITOR,
  visitor,
});

export const addVisitor = visitor => (dispatch) => {
  const visitors = JSON.parse(localStorage.getItem('list')) || [];
  visitors.push(visitor);
  dispatch(setVisitors(visitors));
  dispatch(changeVisitor(visitor));
  localStorage.setItem('list', JSON.stringify(visitors));
};
