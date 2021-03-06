import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../themes';
import QrLogo from '../assets/svg/icon/QR.svg';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textInput}>
        <View style={styles.qrCode}>
          <QrLogo height={22} width={22} />
          {/* <Image style={styles.icQr} source={icQrCode} /> */}
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
    paddingVertical: 20,
    flex: 1,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 35,
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
  }

  // icQr: {
  //   width: 24,
  //   height: 24
  // }
});

export default TopBar;
