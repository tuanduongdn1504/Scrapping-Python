import { takeLatest } from 'redux-saga/effects';
/* ------------- Types ------------- */
import { UserTypes } from './UserRedux/actions';

/* ------------- Sagas ------------- */

import {
  loginEmailSaga,
  registerSaga,
  forgotPasswordSaga
} from './UserRedux/saga';

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield [
    takeLatest(UserTypes.USER_LOGIN_EMAIL, loginEmailSaga),
    takeLatest(UserTypes.USER_REGISTER, registerSaga),
    takeLatest(UserTypes.USER_FORGOT_PASSWORD, forgotPasswordSaga)
    // takeLatest(UserTypes.USER_REGISTER, register),
  ];
}
