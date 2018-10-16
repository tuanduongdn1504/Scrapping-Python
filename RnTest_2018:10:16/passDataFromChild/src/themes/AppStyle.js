import Colors from './Colors';
// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplcationStyle = {
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.background
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  fill: {
    flex: 1
  },
  indicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  textSpacing: {
    marginTop: 5
  }
};

export default ApplcationStyle;
