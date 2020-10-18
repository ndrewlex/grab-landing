import React from 'react';
import { colors } from '../../themes';
import { View, StyleSheet, Text } from 'react-native';
import OvoIcon from '../../assets/svg/icon/Ovo.svg';
import PointIcon from '../../assets/svg/icon/Points.svg';

const BalanceInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <OvoIcon width={30} height={30} />
        <Text style={styles.balance}>IDR 39000</Text>
      </View>
      <View style={styles.row}>
        <PointIcon width={30} height={30} />
        <Text style={styles.points}>34344 Points</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },

  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderColor: colors.gray,
    borderRightWidth: 1,
    borderBottomWidth: 0.5
    // paddingHorizontal: 15
  },

  balance: {
    flex: 1,
    padding: 15
  },

  points: {
    flex: 1,
    padding: 15
  }
});

export default BalanceInfo;
