import React from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform
} from 'react-native';

const TouchableIOS = props => (
  <TouchableHighlight
    underlayColor="transparent"
    accessibilityTraits="button"
    {...props}
  />
);

const Touchable =
  Platform.OS === 'android' ? TouchableNativeFeedback : TouchableIOS;

export default Touchable;
