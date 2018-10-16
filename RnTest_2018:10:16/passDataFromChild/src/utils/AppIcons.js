import { PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons';

const navIconSize =
  __DEV__ === false ? PixelRatio.getPixelSizeForLayoutSize(40) : 40; // eslint-disable-line
const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'ic-sos': [20, '#888888'],
  ghhghg: [20, '#888888'],
  ic_history: [20, '#888888'],
  ic_profile: [20, '#888888'],
  'ic-menu': [20, '#888888'],
  'ic-arrow-back': [20, '#888888'],
  more_logout: [20, '#888888'],
  'ic-add': [20, '#888888'],
  'ic-notification': [20, '#888888'],
  microphone: [20, '#888888'],
  'ic-filter-history': [20, '#888888'],
  'ic-x': [18, '#888888'],
  'ic-edit': [20, '#888888'],
  'ic-accept': [20, '#888888'],
  'ic-delete': [20, '#888888'],
  'ic-search': [20, '#888888'],
  'ic-historyfilter-clearfilter': [20, '#888888']
};

const iconsMap = {};
const iconsLoaded = new Promise(resolve => {
  new Promise.all(
    Object.keys(icons).map(iconName =>
      // IconName--suffix--other-suffix is just the mapping name in iconsMap
      Icon.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      )
    )
  )
    .then(sources => {
      Object.keys(icons).forEach((iconName, idx) => {
        iconsMap[iconName] = sources[idx];
      });

      // Call resolve (and we are done)
      resolve(true);
    })
    .catch(err => console.log(err));
});

export { iconsMap, iconsLoaded };
