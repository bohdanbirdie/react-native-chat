import client from "../feathersClient";

export const AUTH_START = "AUTH_START";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const LOGOUT = "LOGOUT";

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

export const login = () => (dispatch, getState) => {
  const email = "user@user.com";
  const password = "1234";
  
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

const email = "user@user.com";
const password = "1234";

client.authenticate({
  strategy: "local",
  email,
  password
});
// .then((data)=>{
//   console.log(data);
// })
// .catch(error => console.log(error));
