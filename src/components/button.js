import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  getButtonChild() {
    return this.props.loading ? (
      <ActivityIndicator size="small" color="#0000ff" />
    ) : (
      <Text style={[styles.text, this.props.textStyle]}>{this.props.text}</Text>
    );
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[styles.container, this.props.style]}
      >
        {this.getButtonChild()}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: 60,
    minHeight: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "black",
    fontWeight: "bold"
  }
});
