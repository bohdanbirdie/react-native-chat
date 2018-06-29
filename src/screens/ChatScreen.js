import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  SectionList
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { sendMessage, logout } from "../actions";
import Button from "../components/button";

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  renderRow({item, index}) {
    return (
      <View
        style={{
          width: "100%",
          minHeight: 35,
          borderBottomWidth: 0.5,
          borderColor: "#ccc",
          flexDirection: 'column',
          backgroundColor: index % 2 ? '#f2f2f2' : 'white'
        }}
      >
        <Text style={{ fontWeight: "bold", margin: 3 }}>{item.user.email}</Text>
        <Text style={{ margin: 4 }}>{item.text}</Text>
      </View>
    );
  }

  render() {
    console.log(this.props.messages);
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.header}>
          <Button
              onPress={() => {
                this.props.logout();
              }}
              style={styles.logoutButton}
              text="Logout"
            />
          <Text>Chat screen</Text>
        </View>
        <View style={styles.chatContainer}>
          <View style={styles.scrollContainer}>
            <SectionList
              renderItem={this.renderRow}
              sections={[{ title: "", data: this.props.messages }]}
              keyExtractor={(item, index) => item + index}
              style={styles.chatList}
              ListEmptyComponent={() => (
                <Text style={{ fontWeight: "bold" }}>No messages</Text>
              )}
            />
          </View>
          <View style={styles.messageInputRow}>
            <View style={styles.messageInput}>
              <TextInput
                placeholder="Type here..."
                autoFocus
                value={this.state.message}
                onChangeText={message => this.setState({ message })}
              />
            </View>
            <Button
              onPress={() => {
                this.props.sendMessage(this.state.message);
                this.setState({ message: "" });
              }}
              style={styles.sendButton}
              text="Send"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  messages: state.chatReducer.messages
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      sendMessage,
      logout
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatScreen);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff"
  },
  header: {
    width: "100%",
    height: 50,
    paddingTop: 10,
    position: "relative",
    left: 0,
    top: 0,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 5,
    flexDirection: 'row',
  },
  chatContainer: {
    flex: 1,
    justifyContent: "flex-end"
  },
  scrollContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch"
  },
  chatList: {
    width: "100%",
    height: "100%",
    flexDirection: "column"
  },
  messageInputRow: {
    flexDirection: "row",
    height: 30,
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  messageInput: {
    width: "82%",
    height: 30,
    borderRadius: 5,
    borderColor: "#ccc",
    borderWidth: 0.5,
    paddingLeft: 3,
    justifyContent: "center"
  },
  sendButton: {
    width: "15%",
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#76BED0",
    borderRadius: 5,
    marginLeft: "1%"
  },
  logoutButton: {
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 0.5,
    position: 'absolute',
    left: 0,
    backgroundColor: 'red'
    // top: 4,
  }
});
