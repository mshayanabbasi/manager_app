import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyAOHxkoxl71Dt0EMcDWggFGqXvrZwllgSo',
      authDomain: 'manager-892d5.firebaseapp.com',
      databaseURL: 'https://manager-892d5.firebaseio.com',
      projectId: 'manager-892d5',
      storageBucket: 'manager-892d5.appspot.com',
      messagingSenderId: '916747246816',
      appId: '1:916747246816:web:1b333055969d1284dcc485',
      measurementId: 'G-HXKJ0SDW38',
    };
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
