import { put, call } from 'redux-saga/effects';
import { loginUserService } from '../../services/authenticationService';
import * as types from '../actions';

export function* loginSaga(payload) {
  try {
    yield put({ type: types.LOGIN_USER_LOADING, loading: true });
    const response = yield call(loginUserService, payload);

    if (response.status >= 200 && response.status < 300) {
      
      const data = yield response.json();
      localStorage.setItem('token', data.data.access_token);
      yield put({ type: types.LOGIN_USER_LOADING, loading: false });
      yield put({ type: types.LOGIN_USER_SUCCESS, response: data });
    } else {
      throw response;
    }
  } catch (error) {
    yield put({ type: types.LOGIN_USER_LOADING, loading: false });
    const data = yield error.json();
    yield put({ type: types.LOGIN_USER_ERROR, response: data });
  }
}
