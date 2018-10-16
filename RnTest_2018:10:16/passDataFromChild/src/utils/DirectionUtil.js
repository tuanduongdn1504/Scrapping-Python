import { Platform, Linking } from 'react-native';

function directionsURL(adress, index) {
  // https://developer.apple.com/library/ios/featuredarticles/iPhoneURLScheme_Reference/MapLinks/MapLinks.html
  let url;
  if (Platform.OS === 'ios') {
    url =
      index === 0
        ? `http://maps.apple.com/?daddr=${adress}&dirflg=d`
        : `http://maps.google.com/?daddr=${adress}`;
  }
  // https://developers.google.com/maps/documentation/ios-sdk/urlscheme
  if (Platform.OS === 'android') url = `http://maps.google.com/?daddr=${adress}`;

  return url;
}

export function openGoogleMapDirection(address) {
  Linking.openURL(directionsURL(address, 1));
}
