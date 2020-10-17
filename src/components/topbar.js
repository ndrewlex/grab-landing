import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../themes';
import icQrCode from '../assets/png/icon/QR.png';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <View style={styles.qrCode}>
          <Image style={styles.icQr} source={icQrCode} />
        </View>
        <View style={styles.hintWrapper}>
          <Text style={styles.hint}>Search offers, food, and places to go</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: colors.green
  },
  textInput: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignItems: 'stretch',
    borderRadius: 5,
    borderColor: colors.gray,
    backgroundColor: colors.white,
    borderWidth: 1
  },

  hintWrapper: {
    flex: 8,
    alignSelf: 'center',
    textAlign: 'center'
  },

  hint: {
    color: colors.gray,
    textAlign: 'center'
  },

  qrCode: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },

  icQr: {
    width: 18,
    height: 18
  }
});

export default TopBar;
