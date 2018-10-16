import { createAction } from '../../utils/ReduxUtils';

export const UserTypes = {
  USER_LOGIN_EMAIL: 'USER_LOGIN_EMAIL',
  USER_LOGIN_EMAIL_SUCCESS: 'USER_LOGIN_EMAIL_SUCCESS',
  USER_LOGIN_EMAIL_FAILURE: 'USER_LOGIN_EMAIL_FAILURE',

  USER_REGISTER: 'USER_REGISTER',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',

  USER_FORGOT_PASSWORD: 'USER_FORGOT_PASSWORD',
  USER_FORGOT_PASSWORD_SUCCESS: 'USER_FORGOT_PASSWORD_SUCCESS',
  USER_FORGOT_PASSWORD_FAILURE: 'USER_FORGOT_PASSWORD_FAILURE',

  USER_LOGOUT: 'USER_LOGOUT',
  CLEAR_USER_DATA: 'CLEAR_USER_DATA'
};

const loginEmail = data => createAction(UserTypes.USER_LOGIN_EMAIL, { data });
const loginEmailSuccess = response =>
  createAction(UserTypes.USER_LOGIN_EMAIL_SUCCESS, { response });
const loginEmailFailure = err =>
  createAction(UserTypes.USER_LOGIN_EMAIL_FAILURE, { err });

const register = data => createAction(UserTypes.USER_REGISTER, { data });
const registerSuccess = response =>
  createAction(UserTypes.USER_REGISTER_SUCCESS, { response });
const registerFailure = err =>
  createAction(UserTypes.USER_REGISTER_FAILURE, { err });

const forgotPassword = data =>
  createAction(UserTypes.USER_FORGOT_PASSWORD, { data });
const forgotPasswordSuccess = response =>
  createAction(UserTypes.USER_FORGOT_PASSWORD_SUCCESS, { response });
const forgotPasswordFailure = err =>
  createAction(UserTypes.USER_FORGOT_PASSWORD_FAILURE, { err });

const logout = () => createAction(UserTypes.USER_LOGOUT);

export default {
  loginEmail,
  loginEmailSuccess,
  loginEmailFailure,
  forgotPassword,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  register,
  registerSuccess,
  registerFailure,
  logout
};
