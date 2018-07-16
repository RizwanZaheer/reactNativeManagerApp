import firbase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FILED
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
}

export const passwordChanged = (text) => {
  return {
    payload: text,
    type: PASSWORD_CHANGED
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firbase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        console.log(user);
        loginUserSuccess(dispatch, user);
      })
      .catch(() => {
        firbase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(()=>loginUserFailed(dispatch));
      });
  }
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user })
}
const loginUserFailed = dispatch => dispatch({ type: LOGIN_USER_FILED });