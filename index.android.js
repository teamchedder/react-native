import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import App from './src/App';

class ChedderM extends Component {
  render() {
    return (
      <App />
    )
  }
}
AppRegistry.registerComponent('chedderM', () => ChedderM);;