import React from 'react';
import { StyleSheet } from 'react-native';
import Timer from './src/components/Timer';

export default class App extends React.Component {
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
