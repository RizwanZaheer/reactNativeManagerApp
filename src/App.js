/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Platform, StyleSheet } from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import reducers from './reducers';
import RouterComponent from './Router';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAWemGAy9Nh1COwnOKx14SQFQKKb5QIcqg",
      authDomain: "manager-898cf.firebaseapp.com",
      databaseURL: "https://manager-898cf.firebaseio.com",
      projectId: "manager-898cf",
      storageBucket: "manager-898cf.appspot.com",
      messagingSenderId: "576331909629"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, ReduxLogger));
    return [
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    ];
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
