import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
  Platform
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Text } from './Text';
import { Colors } from '../themes';

const { height, width } = Dimensions.get('window');

const Container = (props) => {
  if (props.haveTextInput) {
    if (Platform.OS === 'ios') {
      return (
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={[
            styles.container,
            props.center && styles.center,
            props.style && props.style
          ]}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.fill}>
              {props.children}
              {props.loading && (
                <View style={styles.fadeView}>
                  <ActivityIndicator
                    animating
                    color={Colors.primary}
                    size="large"
                  />
                  {props.message && (
                    <Text style={styles.message}>{props.message}</Text>
                  )}
                </View>
              )}
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
      );
    }
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={[
          styles.container,
          props.center && styles.center,
          props.style && props.style
        ]}
        contentContainerStyle={{
          minHeight: height - 25 - (props.haveTextNar ? 56 : 0),
          width
        }}
        scrollEnabled={!props.disableScrollForContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.positionAbsolute} />
        </TouchableWithoutFeedback>
        {props.children}
        {props.loading && (
          <View style={styles.fadeView}>
            <ActivityIndicator animating color={Colors.primary} size="large" />
            {props.message && (
              <Text style={styles.message}>{props.message}</Text>
            )}
          </View>
        )}
      </ScrollView>
    );
  }
  if (props.scrollEnabled) {
    return (
      <ScrollView
        keyboardShouldPersistTaps="always"
        scrollEnabled
        keyboardDismissMode="on-drag"
        styles={[
          styles.container,
          props.center && styles.center,
          props.style && props.style
        ]}
        contentContainerStyle={{
          minHeight: height - (Platform.OS === 'ios' ? 64 : 56)
        }}
      >
        {props.children}
        {props.loading && (
          <View style={styles.fadeView}>
            <ActivityIndicator animating color={Colors.primary} size="large" />
            {props.message && (
              <Text style={styles.message}>{props.message}</Text>
            )}
          </View>
        )}
      </ScrollView>
    );
  }
  return (
    <View style={[styles.fill, props.style]}>
      {props.children}
      {props.loading && (
        <View style={styles.fadeView}>
          <ActivityIndicator animating color={Colors.primary} size="large" />
          {props.message && <Text style={styles.message}>{props.message}</Text>}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  fadeView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  positionAbsolute: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },
  fill: { flex: 1 }
});

export default Container;
