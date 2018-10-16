import { put, call } from 'redux-saga/effects';
import AppStateActions from './actions';
import { getUserLocation } from '../../services/UserLocation';

export function* requestLocation() {
  try {
    const location = yield call(getUserLocation, false);
    if (location) {
      yield put(AppStateActions.requestLocationSuccess(location));
    }
  } catch (error) {
    console.log(error);
  }
}

export default {};
