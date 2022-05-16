import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HelloWorldApp from './components/HelloWorldApp';
import { Box } from './components/Box';

export default function App() {
  return (
    <View style={styles.container}>
      <HelloWorldApp />
      <Box color="blue" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
