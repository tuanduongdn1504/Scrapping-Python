import { Platform, NativeModules } from 'react-native';

const { FusedLocation } = NativeModules;

export default function GetUserLocation(isHighAccurracy) {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'android') {
      FusedLocation.setLocationPriority(isHighAccurracy ? 0 : 1);
      FusedLocation.getFusedLocation(true).then(
        (location) => {
          resolve({
            latitude: location.latitude,
            longitude: location.longitude
          });
        },
        (error) => {
          console.log(error);
          reject('Location not found');
        }
      );
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
        },
        (error) => {
          console.log(error);
          reject('Location not found');
        },
        isHighAccurracy
          ? { enableHighAccuracy: true, timeout: 10000, maximumAge: 1000 }
          : null
      );
    }
  });
}
