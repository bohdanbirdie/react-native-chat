import client from "../feathersClient";

export const SAVE_USERS_LIST = "SAVE_USERS_LIST";
export const SAVE_INITIAL_MESSSAGES_LIST = "SAVE_INITIAL_MESSSAGES_LIST";
export const RECEIVE_NEW_MESSAGE = "RECEIVE_NEW_MESSAGE";
export const RECEIVE_NEW_USER = "RECEIVE_NEW_USER";

export const subscribeForMessages = () => dispatch => {};

export const saveUsersList = users => ({
  type: SAVE_USERS_LIST,
  payload: users
});

export const saveInitialMessagesList = messages => ({
  type: SAVE_INITIAL_MESSSAGES_LIST,
  payload: messages
});

export const receiveNewMessage = message => ({
  type: RECEIVE_NEW_MESSAGE,
  payload: message
});

export const receiveNewUser = user => ({
  type: RECEIVE_NEW_USER,
  payload: user
});

export const initChat = () => dispatch => {
  const messages = client.service("messages");
  const users = client.service("users");

  client.on("authenticated", login => {
    // Get all users and messages
    Promise.all([
      messages.find({
        query: {
          $sort: { createdAt: -1 },
          $limit: 25
        }
      }),
      users.find()
    ]).then(([messagePage, userPage]) => {
      const messages = messagePage.data.reverse();
      const users = userPage.data;
      console.log(messages);
      dispatch(saveUsersList(users));
      dispatch(saveInitialMessagesList(messages));
    });
  });

  messages.on("created", message => {
    dispatch(receiveNewMessage(message));
  });

  users.on("created", user => {
    dispatch(receiveNewUser(user));
  });
};

export const sendMessage = (message) => (dispatch) => {
  client.service('messages').create({ text: message });
}
