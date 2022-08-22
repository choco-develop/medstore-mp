import { SET_MESSAGE, CLEAR_MESSAGE } from '../actions/type';

const initialState = {};
export default function messageReducer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case SET_MESSAGE:
      return { message: payload };
    case CLEAR_MESSAGE:
      return { message: '' };
    default:
      return state;
  }
}
