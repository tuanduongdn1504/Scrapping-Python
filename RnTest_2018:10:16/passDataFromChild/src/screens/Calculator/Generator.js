import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/smartsos';
import { Text, BoldTitle } from '../../components/Text';
import CustomButton from '../../components/CustomButton';
import { showModal, navigatorStyle } from '../../Setup';
import TextInputCell from '../../components/TextInputCell';
import Container from '../../components/Container';
import { Colors } from '../../themes';
import Touchable from '../../components/Touchable';
import CalculatorOperations from './utils/CalculatorOperations';

class Profile extends React.Component {
  static navigatorStyle = { ...navigatorStyle };
  constructor(props) {
    super(props);
    this.state = {
      sep: '4',
      sub: '5',
      value: '',
      operator: null,
      waitingForOperand: false
    };
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'sideMenu') {
      this.props.navigator.toggleDrawer({
        side: 'left'
      });
    }
  }
  onSub() {
    this.performOperation('-');
    this.onDismiss();
  }
  onSep() {
    this.performOperation('/');
    this.onDismiss();
  }
  onDismiss = () => {
    this.props.navigator.dismissModal();
  };
  passSub(result) {
    this.props.passResultSub(result);
  }
  passSep(result) {
    this.props.passResultSep(result);
  }
  performOperation(nextOperator) {
    const prevValue = this.props.number1;
    const nextValue = this.props.number2;
    console.log(prevValue);
    if (nextOperator === '-') {
      const newValue = prevValue - nextValue;
      this.passSub(newValue);
      console.log(newValue);
    } else {
      const newValue = prevValue / nextValue;
      this.passSep(newValue);
      console.log(newValue);
    }
  }

  render() {
    const { user } = this.props;
    console.log(this.state.isEdit);
    return (
      <Container>
        <View style={styles.viewIcon}>
          <Text>CALCULATOR</Text>
        </View>
        <View style={styles.viewTextEdit}>
          <BoldTitle style={styles.viewUserName}>Number 1:</BoldTitle>
          <BoldTitle style={styles.viewText}>{this.props.number1}</BoldTitle>
        </View>
        <View style={styles.viewTextEdit}>
          <BoldTitle style={styles.viewUserName}>Number 2:</BoldTitle>
          <BoldTitle style={styles.viewText}>{this.props.number2}</BoldTitle>
        </View>
        <View style={styles.viewBtn}>
          <CustomButton
            style={{
              backgroundColor: 'blue',
              margin: 10,
              marginTop: 50,
              width: 100
            }}
            title={this.state.isEdit ? 'SAVE' : '-'}
            onPress={() => this.onSub()}
          />
          <CustomButton
            style={{
              backgroundColor: 'blue',
              margin: 10,
              marginTop: 50,
              width: 100
            }}
            title={this.state.isEdit ? 'SAVE' : '/'}
            onPress={() => this.onSep()}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  viewIcon: {
    height: 50,
    width: 500,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: Colors.whiteThree
  },
  viewTextEdit: {
    flexDirection: 'row',
    // justifyContent: 'center',
    width: 400
  },
  viewBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: 400
  },
  viewUserName: { alignSelf: 'center', marginTop: 10 },
  viewBody: { borderWidth: 0, borderBottomColor: 'grey', margin: 20 },
  viewText: {
    alignSelf: 'center',
    marginTop: 11,
    marginLeft: 50
  }
});
const mapStateToProps = state => ({
  user: state.user.data
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
