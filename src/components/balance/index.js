import React from 'react';
import { colors } from '../../themes';
import { View, StyleSheet, Text } from 'react-native';

const BalanceInfo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.balance}>IDR 39000</Text>
      <Text style={styles.points}>34344 Points</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  balance: {
    flex: 1,
    padding: 15,
    borderColor: colors.gray,
    borderRightWidth: 0.5,
    borderBottomWidth: 0.5
  },

  points: {
    padding: 15,
    flex: 1,
    borderColor: colors.gray,
    borderBottomWidth: 0.5
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    borderWidth: 1
  }
});

export default BalanceInfo;
