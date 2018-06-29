import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
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
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={[styles.container, this.props.style]}>
          {this.getButtonChild()}
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    minWidth: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  text: {
    color: "black"
  }
});
