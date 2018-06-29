import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signUp, switchToLogin } from "../actions";
import Button from "../components/button";

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "user@user.com",
      password: "1234"
    };
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.heading}>Registration</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoFocus
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.input}
          placeholder="password"
          value={this.state.password}
          secureTextEntry
          onChangeText={password => this.setState({ password })}
        />

        <Button
          onPress={() =>
            this.props.signUp(this.state.email, this.state.password)
          }
          style={styles.button}
          text="Sign Up"
          loading={this.props.loading}
        />

        <Button
          onPress={() =>
            this.props.switchToLogin()
          }
          style={styles.button}
          text="To Login page"
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.sessionReducer.fetching
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signUp,
      switchToLogin
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupScreen);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  heading: {
    fontSize: 35,
    fontWeight: "bold",
    margin: 20
  },
  input: {
    width: "80%",
    height: 30,
    borderWidth: 0.5,
    padding: 5,
    margin: 10,
    borderRadius: 5,
    borderColor: "#ccc",
    color: "black"
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#ccc",
    margin: 20
  }
});
