import {
  USER_INFO_REG_FAILER,
  USER_INFO_REG_SUCCESS,
  USER_INFO_REG_REQUEST,
} from '../actions/type';

const INIT_STATE = {
  message: null,
  loading: false,
};

export default function USER_INFO(state = INIT_STATE, action) {
  const { payload, type } = action;
  switch (type) {
    case USER_INFO_REG_REQUEST:
      return {
        ...state,
        message: null,
        loading: true,
      };
    case USER_INFO_REG_SUCCESS:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    case USER_INFO_REG_FAILER:
      return {
        ...state,
        message: payload,
        loading: false,
      };
    default:
      return state;
  }
}
