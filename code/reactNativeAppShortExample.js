import React, { AppRegistry, Component, StyleSheet, Text, View } from 'react-native';

class RNExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
);}}

const styles = StyleSheet.create({
  container: { ... },
  welcome: { ... },
});

AppRegistry.registerComponent('RNExample', () => RNExample);