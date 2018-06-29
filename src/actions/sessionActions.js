import client from "../feathersClient";

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_ERROR = "SIGNUP_ERROR";

export const LOGOUT = "LOGOUT";
export const SWITCH_TO_SIGNUP = "SWITCH_TO_SIGNUP";
export const SWITCH_TO_LOGIN = "SWITCH_TO_LOGIN";

export const switchToSignUp = () => ({
  type: SWITCH_TO_SIGNUP,
})

export const switchToLogin = () => ({
  type: SWITCH_TO_LOGIN,
})

export const authenticateFromStorage = () => (dispatch, getState) => {
  dispatch({
    type: AUTH_START
  });

  client
    .authenticate()
    .then(data => {
      console.log(data);
      dispatch({
        type: AUTH_SUCCESS
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const logout = () => (dispatch, getState) => {
  client
    .logout()
    .then(data => {
      console.log(data);
      dispatch({
        type: LOGOUT
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const login = (email, password) => (dispatch, getState) => {

  dispatch({
    type: AUTH_START
  });

  client
    .authenticate({
      strategy: "local",
      email,
      password
    })
    .then(data => {
      console.log(data);
      dispatch({
        type: AUTH_SUCCESS
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: AUTH_ERROR
      });
    });
};

export const signUp = (email, password) => (dispatch, getState) => {

  dispatch({
    type: SIGNUP_START,
  });

  client.service('users')
    .create({ email, password })
    .then(data => {
      console.log(data);
      dispatch({
        type: SIGNUP_SUCCESS,
      });
      dispatch(login(email, password));
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SIGNUP_ERROR,
      });
    });
};

// client.service('users')
//       .create({ email, password })
//       .then(() => this.login());

// const email = "user@user.com";
// const password = "1234";

// client.authenticate({
//   strategy: "local",
//   email,
//   password
// });
// .then((data)=>{
//   console.log(data);
// })
// .catch(error => console.log(error));
