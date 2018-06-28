import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { authenticateFromStorage, logout } from '../actions'

class LoginScreen extends Component {
  constructor(props){
    super(props);

    // props.logout();
    props.authenticateFromStorage();
    // console.log(props, authenticateFromStorage);

  }
  render() {
    return (
      <View>
        <Text>This is a login screen</Text>
      </View>
    );
  }
}


const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticateFromStorage,
  logout,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
