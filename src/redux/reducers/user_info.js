import {
  USER_INFO_REG_FAILER,
  USER_INFO_REG_SUCCESS,
  USER_INFO_REG_REQUEST,
  COMPANY_INFO_REG_FAILER,
  COMPANY_INFO_REG_SUCCESS,
  COMPANY_INFO_REG_REQUEST,
} from '../actions/type';

const INIT_STATE = {
  message: null,
  loading: false,
  companyMessage: null,
  companyLoading: false,
};

export default function USER_INFO(state = INIT_STATE, action) {
  const { payload, type } = action;
  switch (type) {
    case USER_INFO_REG_REQUEST:
      return {
        ...state,
        message: null,
        loading: true,
        companyMessage: null,
        companyLoading: false,
      };
    case USER_INFO_REG_SUCCESS:
      return {
        ...state,
        message: payload,
        loading: false,
        companyMessage: null,
        companyLoading: false,
      };
    case USER_INFO_REG_FAILER:
      return {
        ...state,
        message: payload,
        loading: false,
        companyMessage: null,
        companyLoading: false,
      };
    case COMPANY_INFO_REG_REQUEST:
      return {
        ...state,
        message: null,
        loading: false,
        companyMessage: payload,
        companyLoading: true,
      };
    case COMPANY_INFO_REG_SUCCESS:
      return {
        ...state,
        message: null,
        loading: false,
        companyMessage: payload,
        companyLoading: false,
      };
    case COMPANY_INFO_REG_FAILER:
      return {
        ...state,
        message: null,
        loading: false,
        companyMessage: payload,
        companyLoading: false,
      };
    default:
      return state;
  }
}
