import { Platform } from 'react-native';

const fontFamily = 'Roboto-Light';
const fontSizeBase = 15;

const type = {
  base: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-light'
      },
      android: {
        fontFamily: 'Roboto-light'
      }
    })
  },
  regular: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-light'
      },
      android: {
        fontFamily: 'Roboto'
      }
    })
  },
  thin: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Thin'
      },
      android: {
        fontFamily: 'Roboto-thin'
      }
    })
  },
  italic: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Italic'
      },
      android: {
        fontFamily: 'Roboto',
        fontStyle: 'italic'
      }
    })
  },
  bold: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Bold'
      },
      android: {
        fontFamily: 'Roboto',
        fontWeight: 'bold'
      }
    })
  },
  light: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Light'
      },
      android: {
        fontFamily: 'Roboto-light'
      }
    })
  },
  lightItalic: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-LightItalic'
      },
      android: {
        fontFamily: 'Roboto-light',
        fontStyle: 'italic'
      }
    })
  },
  boldItalic: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-BoldItalic'
      },
      android: {
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontWeight: 'bold'
      }
    })
  },
  medium: {
    ...Platform.select({
      ios: {
        fontFamily: 'Roboto-Medium'
      },
      android: {
        fontFamily: 'Roboto-medium'
      }
    })
  }
};

const size = {
  tiny: 8.5,
  semiSmall: 10,
  small: 12,
  xsmall: 13,
  normal: 14,
  large: 16,
  xlarge: 18,
  titleN: 20,
  titleL: 22,
  header: 40
};

export default {
  type,
  size,
  fontFamily,
  fontSizeBase
};
