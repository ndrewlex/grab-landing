import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../themes';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Offers, food, and places to go"
        // onChangeText={(text) => onChangeText(text)}
        // value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
    backgroundColor: '#33C072'
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    borderWidth: 1
  }
});

export default TopBar;
