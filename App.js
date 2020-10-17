import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import HomePage from './src/pages/home';
import BottomBar from './src/components/bottom-bar';
const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <HomePage />
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
