import { Navigation } from 'react-native-navigation';

// USER
// import UserHomeScreen from '../screens/Home';
// import UserLogin from '../screens/Authentication';
// import UserForgotPassword from '../screens/Authentication/ForgotPassword';
// import UserRegister from '../screens/Authentication/Register';
// import UserDrawerMenu from '../screens/Drawer';

// import UserSearchService from '../screens/Service/Search';
// import UserServiceDetail from '../screens/Service/Detail';
// import UserServiceBooking from '../screens/Service/Booking';

// import UserProfile from '../screens/Profile';
// import UserChangePassword from '../screens/Profile/ChangePassword';

// import UserNotification from '../screens/Notification';

// import UserSchedule from '../screens/Schedule';

// import UserHistory from '../screens/History';
// import UserHistoryDetail from '../screens/History/Detail';
import CalculatorMain from '../screens/Calculator/index';
import CalculatorActivity from '../screens/Calculator/Generator';
// / ========================== END IMPORT =====================================================

// / ========================== REGISTER SCREENS / COMPONENTS===================================
export function registerScreens(store, Provider) {
  // Navigation.registerComponent(
  //   'user.drawerMenu',
  //   () => UserDrawerMenu,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.home',
  //   () => UserHomeScreen,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent('user.login', () => UserLogin, store, Provider);
  // Navigation.registerComponent(
  //   'user.forgotPassword',
  //   () => UserForgotPassword,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.register',
  //   () => UserRegister,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.searchService',
  //   () => UserSearchService,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.serviceDetail',
  //   () => UserServiceDetail,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.serviceBooking',
  //   () => UserServiceBooking,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.profile',
  //   () => UserProfile,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.changePassword',
  //   () => UserChangePassword,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.notification',
  //   () => UserNotification,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.history',
  //   () => UserHistory,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.historyDetail',
  //   () => UserHistoryDetail,
  //   store,
  //   Provider
  // );
  // Navigation.registerComponent(
  //   'user.schedule',
  //   () => UserSchedule,
  //   store,
  //   Provider
  // );
  Navigation.registerComponent(
    'user.calculatorMain',
    () => CalculatorMain,
    store,
    Provider
  );
  Navigation.registerComponent(
    'user.calculatorActivity',
    () => CalculatorActivity,
    store,
    Provider
  );
}

export default {};
