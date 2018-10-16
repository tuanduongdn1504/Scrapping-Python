import Immutable from 'seamless-immutable';
import { AppStateTypes } from './actions';
import { createReducer } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  historyTab: 0,
  location: null,
  networkStatus: null,
  userGroupTab: 0,
  alerts: {},
  oneSignalId: null
});

export const changeHistoryTab = (state, action) => state.merge({
  historyTab: action.index
});

export const changeUserGroupTab = (state, action) => state.merge({
  userGroupTab: action.index
});

export const requestLocationSuccess = (state, action) => state.merge({
  location: action.location
});

export const changeNetworkStatus = (state, action) => state.merge({ networkStatus: action.status });

export const showAlertMessage = (state, { name, message, messageType }) => state.setIn(['alerts', name], { type: messageType, message });

export const clearAlertMessage = (state, { name }) => state.setIn(['alerts', name], null);

export const savePushToken = (state, { token }) => state.merge({
  oneSignalId: token
});

const reducer = createReducer(INITIAL_STATE, {
  [AppStateTypes.CHANGE_HISTORY_TAB]: changeHistoryTab,
  [AppStateTypes.REQUEST_LOCATION_SUCCESS]: requestLocationSuccess,
  [AppStateTypes.CHANGE_NETWORK_STATUS]: changeNetworkStatus,
  [AppStateTypes.CHANGE_USER_GROUP_TAB]: changeUserGroupTab,
  [AppStateTypes.SHOW_ALERT_MESSAGE]: showAlertMessage,
  [AppStateTypes.CLEAR_ALERT_MESSAGE]: clearAlertMessage,
  [AppStateTypes.SAVE_PUSH_TOKEN]: savePushToken
});

export default reducer;
