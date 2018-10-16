import React from 'react';
import { StyleSheet, PixelRatio, Dimensions, Text as RNText } from 'react-native';
import fonts from '../themes/Fonts';

const pixelRatio = PixelRatio.get();
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const normalize = (size) => {
  if (pixelRatio === 2) {
    // iphone 5s and older Androids
    if (deviceWidth < 360) {
      return size * 1.1;
    }
    // iphone 5
    if (deviceHeight < 667) {
      return size * 1.1;
      // iphone 6-6s
    } else if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }
  if (pixelRatio === 3) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size * 1.1;
    }
    // Catch other weird android width sizings
    if (deviceHeight < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }
  if (pixelRatio === 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (deviceWidth <= 360) {
      return size * 1.1;
      // Catch other smaller android height sizings
    }
    if (deviceHeight < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (deviceHeight >= 667 && deviceHeight <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return size;
};

const Text = props => (
  <RNText
    {...props}
    style={[styles.text, props.color && { color: props.color }, props.style]}
    allowFontScaling={false}
  >
    {props.children}
  </RNText>
);

const SubText = props => (
  <RNText
    {...props}
    style={[styles.subText, props.color && { color: props.color }, props.style]}
    allowFontScaling={false}
  >
    {props.children}
  </RNText>
);
const BoldLargeText = (props) => {
  return (
    <RNText
      {...props}
      style={[styles.boldLargeText, props.color && { color: props.color }, props.style]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};
const BoldTitle = (props) => {
  return (
    <RNText
      {...props}
      style={[styles.boldTitle, props.color && { color: props.color }, props.style]}
      allowFontScaling={false}
    >
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: normalize(fonts.size.normal),
    fontFamily: fonts.fontFamily,
    color: '#43484d',
  },
  subText: {
    fontSize: normalize(fonts.size.small),
    fontFamily: fonts.fontFamily,
    color: '#43484d',
  },
  boldLargeText: {
    lineHeight: 25,
    fontSize: normalize(fonts.size.titleL),
    fontFamily: fonts.type.bold.fontFamily,
    fontWeight: '500',
    fontStyle: 'normal',
    letterSpacing: 0.23,
    color: '#f3da22',
    textAlign: 'left',
  },
  boldTitle: {
    fontFamily: fonts.type.bold.fontFamily,
    fontSize: normalize(fonts.size.xlarge),
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
    color: '#12132c',
  },
});

export { Text, SubText, BoldLargeText, BoldTitle };
