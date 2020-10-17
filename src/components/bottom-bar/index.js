import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../../themes';
import homeIcon from '../../assets/png/icon/menu-home.png';
import activityIcon from '../../assets/png/icon/menu-activity.png';
import paymentIcon from '../../assets/png/icon/menu-payment.png';
import messageIcon from '../../assets/png/icon/menu-message.png';
import accountIcon from '../../assets/png/icon/menu-account.png';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Image style={styles.imgMenu} source={homeIcon} />
        <Text style={styles.textMenu}>Home</Text>
      </View>
      <View style={styles.menu}>
        <Image style={styles.imgMenu} source={activityIcon} />
        <Text style={styles.textMenu}>Activity</Text>
      </View>
      <View style={styles.menu}>
        <Image style={styles.imgMenu} source={paymentIcon} />
        <Text style={styles.textMenu}>Payment</Text>
      </View>
      <View style={styles.menu}>
        <Image style={styles.imgMenu} source={messageIcon} />
        <Text style={styles.textMenu}>Messages</Text>
      </View>
      <View style={styles.menu}>
        <Image style={styles.imgMenu} source={accountIcon} />
        <Text style={styles.textMenu}>Account</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row'
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 10
  },
  textMenu: {
    color: colors.gray
  },
  imgMenu: {
    height: 26,
    width: 26
  }
});

export default BottomBar;
