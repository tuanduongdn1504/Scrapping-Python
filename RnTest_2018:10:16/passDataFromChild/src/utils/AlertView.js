import { Alert, Linking, Platform } from 'react-native';
import UserActions from '../redux/UserRedux/actions';
import { store, startLoginContent } from '../Setup';

export default function showAlertError(error) {
  if (error) {
    if (error.code === 426) {
      const APP_STORE_LINK =
        'itms://itunes.apple.com/au/app/myaccountant/id1177322536?ls=1&mt=8';
      const PLAY_STORE_LINK = 'market://details?id=com.ma.MyAccountant';
      Alert.alert(
        'Update Available',
        'We have had some significant upgrades for the app. Please click below to upgrade your app!',
        [
          {
            text: 'Not now'
          },
          {
            text: 'Update',
            onPress: () => {
              if (Platform.OS === 'ios') {
                Linking.openURL(APP_STORE_LINK).catch(err => console.log(err));
              } else {
                Linking.openURL(PLAY_STORE_LINK).catch(err => console.log(err));
              }
            },
            style: 'default'
          }
        ]
      );
      return;
    }
    if (error.code === 500) {
      Alert.alert('Error', 'Server not response. Please try again.');
      return;
    }
    if (
      error.code === 401 &&
      (error.message === 'Unexpected end of JSON input' ||
        error.message === 'JSON Parse error: Unexpected EOF')
    ) {
      if (store.getState().user.isLogined) {
        store.dispatch(UserActions.logout());
        Alert.alert('', 'Your session has expired. Please relogin', [
          {
            text: 'Ok',
            onPress: () => {
              startLoginContent();
            }
          }
        ]);
      }
    } else if (error.message == null || error.message === '') {
      Alert.alert('', 'Something wrong. Please try again.');
    } else {
      Alert.alert('', `${error.message}`);
    }
  }
}
