import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { authenticateFromStorage, logout, login } from "../actions";

class Navigator extends Component {
  constructor(props) {
    super(props);

    // props.logout();
    props.authenticateFromStorage();
  }

  getAuthenticatedScreen() {
    return (
      <View>
        <Button
          onPress={this.props.logout}
          title="Logout"
          color="#841584"
        />
      </View>
    );
  }

  getLoginScreen() {
    return (
      <View>
        <Button
          onPress={this.props.login}
          title="Login"
          color="green"
        />
      </View>
    );
  }
  getScreen() {
    return this.props.authenticated
      ? this.getAuthenticatedScreen()
      : this.getLoginScreen();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.getScreen()}</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.sessionReducer.authenticated
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      authenticateFromStorage,
      logout,
      login
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
    backgroundColor: '#cccccc'
  }
});
