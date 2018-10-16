import Immutable from 'seamless-immutable';
import { UserTypes } from '../UserRedux/actions';
import { createReducer } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  // Login screen
  loadingLogin: false,
  errorLogin: null,

  // ForgotPassword screen
  loadingForgotPassword: false,
  errorForgotPassword: null,
  messageForgotPassword: '',

  // Register screen
  loadingRegister: false,
  errorRegister: null
  // messageRegister: ''
});

// Login Screen

export const loginEmail = state =>
  state.merge({ loadingLogin: true, errorLogin: null });

export const loginEmailSuccess = (state, { response }) =>
  state.merge({ loadingLogin: false });

export const loginEmailFailure = (state, { err }) =>
  state.merge({ loadingLogin: false, errorLogin: err });

// Register Screen

export const register = state =>
  state.merge({ loadingRegister: true, errorRegister: null });

export const registerSuccess = (state, { response }) =>
  state.merge({ loadingRegister: false });

export const registerFailure = (state, { err }) =>
  state.merge({ loadingRegister: false, errorRegister: err });

// ForgotPassword screen
export const forgotPassword = state =>
  state.merge({
    loadingForgotPassword: true,
    errorForgotPassword: null,
    messageForgotPassword: ''
  });

export const forgotPasswordSuccess = (state, { response }) =>
  state.merge({
    loadingForgotPassword: false,
    messageForgotPassword: response.Message
  });

export const forgotPasswordFailure = (state, { err }) =>
  state.merge({ loadingForgotPassword: false, errorForgotPassword: err });

// export const retrieving = state => state.merge({ error: null, loading: true });
//
// export const retrievingSuccess = (state, { response }) =>
//   state.merge({ loading: false, data: response });
//
// export const retrievingFailure = (state, { err }) =>
//   state.merge({ loading: false, error: err });
//
// export const changePassword = state =>
//   state.merge({ loading: true, error: null, messageChangePassword: '' });
//
// export const changePasswordSuccess = (state, { response }) =>
//   state.merge({ loading: false, messageChangePassword: response.Message });
//
// export const changePasswordFailure = (state, { err }) =>
//   state.merge({ loading: false, error: err });
//
// export const updateUser = state =>
//   state.merge({ loading: true, error: null, messageUpdateUser: '' });
//
// export const updateUserSuccess = (state, { response }) =>
//   state.merge({ loading: false, messageUpdateUser: response.Message });
//
// export const updateUserFailure = (state, { err }) =>
//   state.merge({ loading: false, error: err });
//
// export const logout = state => state.merge({ ...INITIAL_STATE });
//
// export const updateGST = state =>
//   state.merge({ loading: true, error: null, messageUpdateUser: '' });
//
// export const updateGSTSuccess = (state, { response }) =>
//   state.merge({ loading: false, messageUpdateGST: response.Message });
//
// export const updateGSTFailure = (state, { err }) =>
//   state.merge({ loading: false, error: err });
//
// export const updateAvatar = (state, { data }) =>
//   state.merge({ loadingAvatar: true, error: null, tempUri: data.tempUri });
//
// export const updateAvatarSuccess = state =>
//   state.merge({ loadingAvatar: false, tempUri: '' });
//
// export const updateAvatarFailure = (state, { err }) =>
//   state.merge({ loadingAvatar: false, error: err, tempUri: '' });

const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.USER_LOGIN_EMAIL]: loginEmail,
  [UserTypes.USER_LOGIN_EMAIL_SUCCESS]: loginEmailSuccess,
  [UserTypes.USER_LOGIN_EMAIL_FAILURE]: loginEmailFailure,
  [UserTypes.USER_REGISTER]: register,
  [UserTypes.USER_REGISTER_SUCCESS]: registerSuccess,
  [UserTypes.USER_REGISTER_FAILURE]: registerFailure,
  [UserTypes.USER_FORGOT_PASSWORD]: forgotPassword,
  [UserTypes.USER_FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
  [UserTypes.USER_FORGOT_PASSWORD_FAILURE]: forgotPasswordFailure
  // [LoginTypes.USER_REGISTER]: register,
  // [LoginTypes.USER_REGISTER_SUCCESS]: registerSuccess,
  // [LoginTypes.USER_REGISTER_FAILURE]: registerFailure,
  // [LoginTypes.USER_RETRIEVING]: retrieving,
  // [LoginTypes.USER_RETRIEVING_SUCCESS]: retrievingSuccess,
  // [LoginTypes.USER_RETRIEVING_FAILURE]: retrievingFailure,

  // [LoginTypes.USER_CHANGE_PASSWORD]: changePassword,
  // [LoginTypes.USER_CHANGE_PASSWORD_SUCCESS]: changePasswordSuccess,
  // [LoginTypes.USER_CHANGE_PASSWORD_FAILURE]: changePasswordFailure,
  // [LoginTypes.USER_UPDATE]: updateUser,
  // [LoginTypes.USER_UPDATE_SUCCESS]: updateUserSuccess,
  // [LoginTypes.USER_UPDATE_FAILURE]: updateUserFailure,
  // [LoginTypes.USER_LOGOUT]: logout,
  // [LoginTypes.USER_UPDATE_GST]: updateGST,
  // [LoginTypes.USER_UPDATE_GST_SUCCESS]: updateGSTSuccess,
  // [LoginTypes.USER_UPDATE_GST_FAILURE]: updateGSTFailure,
  // [LoginTypes.USER_UPDATE_AVATAR]: updateAvatar,
  // [LoginTypes.USER_UPDATE_AVATAR_SUCCESS]: updateAvatarSuccess,
  // [LoginTypes.USER_UPDATE_AVATAR_FAILURE]: updateAvatarFailure
});

export default reducer;
