import { createAction } from '../../utils/ReduxUtils';

export const AppStateTypes = {
  CHANGE_HISTORY_TAB: 'CHANGE_HISTORY_TAB',
  REQUEST_LOCATION: 'REQUEST_LOCATION',
  REQUEST_LOCATION_SUCCESS: 'REQUEST_LOCATION_SUCCESS',
  CHANGE_NETWORK_STATUS: 'CHANGE_NETWORK_STATUS',
  CHANGE_USER_GROUP_TAB: 'CHANGE_USER_GROUP_TAB',
  SHOW_ALERT_MESSAGE: 'SHOW_ALERT_MESSAGE',
  CLEAR_ALERT_MESSAGE: 'CLEAR_ALERT_MESSAGE',
  SAVE_PUSH_TOKEN: 'SAVE_PUSH_TOKEN'
};

const changeHistoryTab = index => createAction(AppStateTypes.CHANGE_HISTORY_TAB, { index });
const changeUserGroupTab = index => createAction(AppStateTypes.CHANGE_USER_GROUP_TAB, { index });
const requestLocation = () => createAction(AppStateTypes.REQUEST_LOCATION);
const requestLocationSuccess = location =>
  createAction(AppStateTypes.REQUEST_LOCATION_SUCCESS, { location });
const changeNetworkStatus = status => createAction(AppStateTypes.CHANGE_NETWORK_STATUS, { status });
const showAlertMessage = (name, messageType, message) =>
  createAction(AppStateTypes.SHOW_ALERT_MESSAGE, { name, messageType, message });
const clearAlertMessage = name => createAction(AppStateTypes.CLEAR_ALERT_MESSAGE, { name });
const savePushToken = token => createAction(AppStateTypes.SAVE_PUSH_TOKEN, { token });

export default {
  changeHistoryTab,
  changeUserGroupTab,
  requestLocation,
  requestLocationSuccess,
  changeNetworkStatus,
  showAlertMessage,
  clearAlertMessage,
  savePushToken
};
