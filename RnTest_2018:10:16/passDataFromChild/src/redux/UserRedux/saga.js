import _ from 'lodash';
import { put, call, select } from 'redux-saga/effects';
// import OneSignal from 'react-native-onesignal';
import UserActions from './actions';
// import { loginEmail, register, forgotPassword } from '../../api/auth';
import { translate } from '../../utils/locale';

// export function* loginEmailSaga({ data }) {
//   try {
//     const response = yield call(loginEmail, data);
//     yield put(
//       UserActions.loginEmailSuccess({
//         token: response.token,
//         data: {
//           firstName: 'vinh',
//           lastName: 'nguyen',
//           phoneNumber: response.phoneNumber,
//           email: response.email,
//           id: response.id
//         }
//       })
//     );
//   } catch (error) {
//     yield put(UserActions.loginEmailFailure(error));
//   }
// }

// export function* registerSaga({ data }) {
//   try {
//     const response = yield call(register, data);
//     console.log(response);
//     yield put(
//       UserActions.registerSuccess({
//         token: response.token,
//         data: {
//           firstName: 'vinh',
//           lastName: 'nguyen',
//           phoneNumber: response.phoneNumber,
//           email: response.email,
//           id: response.id
//         }
//       })
//     );
//   } catch (error) {
//     console.log(error);
//     yield put(UserActions.registerFailure(error));
//   }
// }

// export function* forgotPasswordSaga({ data }) {
//   try {
//     const response = yield call(forgotPassword, data);
//     yield put(UserActions.forgotPasswordSuccess(response));
//   } catch (error) {
//     yield put(UserActions.forgotPasswordFailure(error));
//   }
// }
