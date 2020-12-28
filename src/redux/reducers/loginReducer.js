import * as types from '../actions';

export function login(state = [], action) {
  const response = action.response;

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response };
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};

export function loading(state = false, action) {
  const loading = action.loading;

  switch(action.type) {
    case types.LOGIN_USER_LOADING:
      return { ...state, loading };
    default:
      return state;
  }
};