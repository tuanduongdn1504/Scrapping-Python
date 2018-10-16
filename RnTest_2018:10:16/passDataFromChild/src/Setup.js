import React from 'react';
import { NetInfo, AppState, Linking } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
// import VersionCheck from 'react-native-version-check';
import { registerScreens } from './navigation/screens';
import { iconsMap, iconsLoaded } from './utils/AppIcons';
import configureStore from './redux/store';
import { Colors } from './themes';
import { configureLocale, translate, setTranslations } from './utils/locale';

export let store = null;

export const navigatorStyle = {
  navBarBackgroundColor: '#fff',
  navBarTextColor: '#000000',
  navBarButtonColor: 'black',
  orientation: 'portrait',
  navBarTextFontFamily: 'Roboto-Regular',
  navBarNoBorder: false,
  navBarTextFontSize: 16.5,
  topBarBorderColor: '#e9e9e9',
  topBarElevationShadowEnabled: false,
  statusBarTextColorScheme: 'dark',
  statusBarColor: 'white'
};

export function push(
  navigator,
  config,
  navigatorButtons,
  navHidden,
  overrideBackPress = false
) {
  navigator.push({
    ...config,
    backButtonTitle: '',
    navigatorButtons: {
      ...navigatorButtons,
      leftButtons: [
        {
          icon: iconsMap['ic-arrow-back'],
          id: 'backEvent',
          buttonColor: 'white'
        }
      ]
    },
    navigatorStyle: { ...navigatorStyle, navBarHidden: navHidden || false },
    overrideBackPress
  });
}

export function resetTo(
  navigator,
  config,
  navigatorButtons,
  navHidden,
  overrideBackPress = false
) {
  navigator.resetTo({
    ...config,
    backButtonTitle: '',
    navigatorButtons: {
      ...navigatorButtons,
      leftButtons: [
        {
          icon: iconsMap['ic-arrow-back'],
          id: 'backEvent',
          buttonColor: 'white'
        }
      ]
    },
    navigatorStyle: { ...navigatorStyle, navBarHidden: navHidden || false },
    overrideBackPress
  });
}

export function showModal(
  navigator,
  config,
  navigatorButtons,
  navHidden,
  overrideBackPress = false
) {
  navigator.showModal({
    ...config,
    navigatorButtons: {
      ...navigatorButtons,
      leftButtons: [
        {
          icon: iconsMap['ic-x'],
          id: 'closeEvent',
          buttonColor: 'white'
        }
      ]
    },
    navigatorStyle: {
      ...navigatorStyle,
      navBarHidden: navHidden || false
    },
    overrideBackPress
  });
}

export function showPopup(
  data,
  tapBackgroundToDismiss = true,
  overrideBackPress = false
) {
  Navigation.showLightBox({
    screen: 'smartsos.popup',
    passProps: data,
    style: {
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      tapBackgroundToDismiss
    },
    overrideBackPress
  });
}

export function startMainContent() {
  // const { oneSignalId } = store.getState().appState;
  // if (oneSignalId) {
  //   store.dispatch(UserActions.updateUser('oneSignalId', { oneSignalId }));
  // }
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'user.calculatorMain',
      title: 'CALCULATOR',
      navigatorStyle,
      navigatorButtons: {
        leftButtons: [
          {
            icon: iconsMap['ic-menu'],
            id: 'sideMenu'
          }
        ],
        rightButtons: [
          {
            icon: iconsMap['ic-search'],
            id: 'search'
          }
        ]
      }
    },
    drawer: {
      left: {
        screen: 'user.drawerMenu',
        enabled: true
      },
      disableOpenGesture: true
    },
    appStyle: {
      orientation: 'portrait',
      forceTitlesDisplay: true
      // backButtonImage: iconsMap['ic-arrow-back']
    },
    animationType: 'none'
  });
}

export function startLoginContent() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'user.login',
      title: 'Login',
      navigatorStyle: {
        navBarHidden: true,
        statusBarTextColorScheme: 'dark',
        statusBarColor: 'white'
      }
    },
    animationType: 'none'
  });
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loadIntial();
  }

  // checkUpdate() {
  //   VersionCheck.needUpdate().then((res) => {
  //     if (res.isNeeded) {
  //       showPopup({
  //         title: translate('STR_ALERT_TITLE_UPDATE_APP_AVAILBLE'),
  //         message: translate('STR_ALERT_MESSAGE_UPDATE_APP_AVAILBLE'),
  //         actions: [
  //           {
  //             text: translate('STR_BUTTON_CANCEL'),
  //             onPress: () => {},
  //           },
  //           {
  //             text: translate('STR_BUTTON_OK'),
  //             onPress: async () => Linking.openURL(await VersionCheck.getStoreUrl()),
  //           },
  //         ],
  //       });
  //     }
  //   });
  // }

  loadIntial() {
    Promise.all([this.loadStore(), iconsLoaded]).then(() => {
      this.startApp();
    });
  }

  async loadStore() {
    return new Promise(resolve => {
      store = configureStore(() => resolve('Store loaded'));
      registerScreens(store, Provider);
    });
  }
  startApp = () => {
    // if (store.getState().user.isLogined) {
    startMainContent();
    // } else {
    //   startLoginContent();
    // }
  };
}

export default App;
