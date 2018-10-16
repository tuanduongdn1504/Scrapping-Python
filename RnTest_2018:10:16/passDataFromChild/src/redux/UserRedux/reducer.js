import moment from 'moment';
import _ from 'lodash';
import Immutable from 'seamless-immutable';
import { UserTypes } from './actions';
import { createReducer } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  isLogined: false,
  token: null,
  data: null,
});

export const loginEmailSuccess = (state, { response }) =>
  state.merge({
    isLogined: true,
    data: response.data,
    token: response.token,
  });

export const registerSuccess = (state, { response }) =>
  state.merge({
    isLogined: true,
    data: response.data,
    token: response.token,
  });

export const logout = state => state.merge({ ...INITIAL_STATE });

const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.USER_LOGIN_EMAIL_SUCCESS]: loginEmailSuccess,
  [UserTypes.USER_REGISTER_SUCCESS]: registerSuccess,
  [UserTypes.USER_LOGOUT]: logout,
});

export default reducer;
