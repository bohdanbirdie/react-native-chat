import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { authenticateFromStorage, logout, login, initChat } from "../actions";
import LoginScreen from "./LoginScreen";
import SignupScreen from "./SignupScreen";
import ChatScreen from "./ChatScreen";

class Navigator extends Component {
  constructor(props) {
    super(props);

    props.authenticateFromStorage();
    props.initChat();
  }

  getAuthenticatedScreen() {
    return (<ChatScreen />)
    // return (
    //   <View>
    //     <Button onPress={this.props.logout} title="Logout" color="#841584" />
    //   </View>
    // );
  }

  getLoginScreen() {
    return this.props.isLogin ? <LoginScreen /> : <SignupScreen />;
  }
  getScreen() {
    return this.props.authenticated
      ? this.getAuthenticatedScreen()
      : this.getLoginScreen();
  }

  render() {
    return <View>{this.getScreen()}</View>;
  }
}

const mapStateToProps = state => ({
  authenticated: state.sessionReducer.authenticated,
  isLogin: state.sessionReducer.isLogin
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authenticateFromStorage,
      logout,
      login,
      initChat,
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    height: 30,
    width: 80,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#cccccc"
  }
});
