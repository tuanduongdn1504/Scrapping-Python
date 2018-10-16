import { combineReducers } from 'redux';

import UserReducer from './UserRedux/reducer';
import LoadingReducer from './LoadingRedux/reducer';

export default combineReducers({
  user: UserReducer,
  loading: LoadingReducer
});
