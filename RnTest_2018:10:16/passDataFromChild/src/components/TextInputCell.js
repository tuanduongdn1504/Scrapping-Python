import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';
import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/smartsos';

import { Colors } from '../themes';
import { Text } from '../components/Text';
import { font } from '../themes/Fonts';

const { width } = Dimensions.get('window');
const TextInputCell = props => {
  TextInputCell.propTypes = {
    style: PropTypes.number,
    inputRef: PropTypes.func,
    value: PropTypes.string,
    placeholderTextColor: PropTypes.string,
    title: PropTypes.string
  };
  return (
    <View>
      <View style={styles.inputField}>
        {/* <Icon name={props.icon} size={15} /> */}
        <View>
          <Text style={{ marginLeft: 20 }}>{props.title}</Text>
          <TextInput
            {...props}
            ref={props.inputRef}
            style={[styles.textInput, props.style]}
            value={props.value}
            editable={props.editable}
            placeholder={props.placeholder}
            placeholderTextColor={
              props.placeholderTextColor
                ? props.placeholderTextColor
                : Colors.lightBlack
            }
            underlineColorAndroid="transparent"
            selectTextOnFocus
            required
            clearButtonMode="while-editing"
            autoCorrect={false}
          />
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: 'grey' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 20
  },
  textInput: {
    marginLeft: 20,
    width: width - 40,
    ...Platform.select({
      ios: {
        height: 23
        // marginTop: 12,
      },
      android: {
        height: 35
      }
    }),
    // fontFamily: font.text,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 17,
    letterSpacing: 0,
    textAlign: 'left',
    color: Colors.primaryText,
    borderColor: 'white'
  }
});

export default TextInputCell;
