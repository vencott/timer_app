import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Timer from './src/components/Timer';

export default class App extends Component {
  render() {
    return <Timer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
