import React, { PureComponent } from 'react';
import { TouchableOpacity, View, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../themes';
import { Text } from './Text';

const { width } = Dimensions.get('window');

class CustomButton extends PureComponent {
  onPress = () => {
    this.props.onPress();
  };
  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View style={[styles.container, this.props.style]}>
          <Text color={this.props.titleColor || 'white'}>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  ...TouchableOpacity.propTypes,
  title: PropTypes.string,
  titleColor: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.any
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 5
  }
});

export default CustomButton;
