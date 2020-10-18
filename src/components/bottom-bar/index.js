import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeIcon from '../../assets/svg/icon/menu-home.svg';
import ActivityIcon from '../../assets/svg/icon/menu-activity.svg';
import PaymentIcon from '../../assets/svg/icon/menu-payment.svg';
import MessageIcon from '../../assets/svg/icon/menu-message.svg';
import AccountIcon from '../../assets/svg/icon/menu-account.svg';
import { colors } from '../../themes';

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <HomeIcon width={26} height={26} fill={colors.green} />
        <Text style={styles.textMenu}>Home</Text>
      </View>
      <View style={styles.menu}>
        <ActivityIcon width={26} height={26} />
        <Text style={styles.textMenu}>Activity</Text>
      </View>
      <View style={styles.menu}>
        <PaymentIcon width={26} height={26} />
        <Text style={styles.textMenu}>Payment</Text>
      </View>
      <View style={styles.menu}>
        <MessageIcon width={26} height={26} />
        <Text style={styles.textMenu}>Messages</Text>
      </View>
      <View style={styles.menu}>
        <AccountIcon width={26} height={26} />
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
