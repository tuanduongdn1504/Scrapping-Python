import React from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import { connect } from 'react-redux';
// import Icon from 'react-native-vector-icons/smartsos';
import { Text, BoldTitle } from '../../components/Text';
import CustomButton from '../../components/CustomButton';
import { showModal, navigatorStyle } from '../../Setup';
import TextInputCell from '../../components/TextInputCell';
import Container from '../../components/Container';
import { Colors } from '../../themes';
import Touchable from '../../components/Touchable';
import { STRUCTURAL_USER_PROFILE } from '../../utils/AppConstants';
import Tools from '../../utils/Tools';
import _ from 'lodash';

class Profile extends React.Component {
  static navigatorStyle = { ...navigatorStyle };
  constructor(props) {
    super(props);
    this.state = {
      number1: 20, // user.Name
      number2: 5,
      sub: '',
      sep: '',
      isEdit: false
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

  onChangePassword = () => {
    if (!Tools.validateField(this.state.number1)) {
      return Alert.alert('', 'Number1 can not be empty.');
    } else if (!Tools.validateNumber(this.state.number1)) {
      return Alert.alert('', 'Number1 is Integer, Not Character.');
    } else if (!Tools.validateField(this.state.number2)) {
      return Alert.alert('', 'Number2 can not be empty.');
    } else if (!Tools.validateNumber(this.state.number2)) {
      return Alert.alert('', 'Number2 is Integer, Not Character.');
    }
    showModal(this.props.navigator, {
      screen: 'user.calculatorActivity',
      title: 'calculatorActivity',
      passProps: {
        number1: this.state.number1,
        number2: this.state.number2,
        passResultSub: this.getSub, // callBack function
        passResultSep: this.getSep // callBack function
      }
    });
  };
  onChangeAvatar = () => {
    console.log('Avatar');
  };
  onEditProfile = () => {
    this.setState({ isEdit: true });
  };
  onSaveEdit = () => {
    this.setState({ isEdit: false });
    // push DATA user???
  };
  getSub = childData => {
    console.log(childData);
    this.setState({ sub: childData });
    console.log(this.state.sub);
  };
  getSep = childData => {
    this.setState({ sep: childData });
  };
  renderItem = ({ item, index }) => {
    const post = _.map(this.state, item => {
      return item;
    });
    console.log(item);
    const itemTop = index === 0 || index === 1;
    const itemBottom = post.length - 2 === index || post.length - 1 === index;

    return (
      <View>
        <TextInputCell editable={false}>{this.state.sub}</TextInputCell>
        <TextInputCell editable={false}>{this.state.sep}</TextInputCell>
      </View>
    );
  };
  render() {
    const { user } = this.props;
    const post = _.map(this.state, item => {
      return item;
    });
    console.log(this.state.isEdit);
    return (
      <Container>
        <View style={styles.viewIcon}>
          <Text>CALCULATOR</Text>
        </View>
        <View style={styles.viewTextEdit}>
          <BoldTitle style={styles.viewUserName}>Number 1:</BoldTitle>
          <TextInputCell
            onChangeText={text => this.setState({ number1: parseInt(text) })}
          >
            {this.state.number1}
          </TextInputCell>
        </View>
        <View style={styles.viewTextEdit}>
          <BoldTitle style={styles.viewUserName}>Number 2:</BoldTitle>
          <TextInputCell
            onChangeText={text => this.setState({ number2: parseInt(text) })}
          >
            {this.state.number2}
          </TextInputCell>
        </View>
        <CustomButton
          style={{
            backgroundColor: 'blue',
            alignSelf: 'flex-end',
            marginTop: 20,
            width: 100
          }}
          title={this.state.isEdit ? 'SAVE' : 'SEND'}
          onPress={this.state.isEdit ? this.onSaveEdit : this.onChangePassword}
        />
        <View style={styles.viewBody}>
          <View />
          <FlatList
            style={styles.list}
            data={post}
            numColumns={2}
            keyExtractor={(item, index) => index}
            renderItem={this.renderItem}
            ItemSeparatorComponent={() => <View style={styles.viewSeparator} />}
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
    flexDirection: 'row'
  },
  viewUserName: { alignSelf: 'center', marginTop: 10 },
  viewBody: { borderWidth: 0, borderBottomColor: 'grey', margin: 20 },
  title: {
    alignSelf: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderRightColor: 'white',
    borderLeftColor: 'white'
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
