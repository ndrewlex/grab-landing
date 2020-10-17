import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { colors } from '../../themes';
import { mainMenuListTop, mainMenuListBottom } from './helper';

const MainMenu = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {mainMenuListTop.map((menu, index) => (
          <View style={styles.item} key={index}>
            <Image source={menu.link}></Image>
            <Text>{menu.label}</Text>
          </View>
        ))}
      </View>
      <View style={styles.row}>
        {mainMenuListBottom.map((menu, index) => (
          <View style={styles.item} key={index}>
            <Image source={menu.link}></Image>
            <Text>{menu.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    borderBottomWidth: 0.5,
    borderColor: colors.gray,
    paddingBottom: 15
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15
  },
  item: {
    flex: 1,
    borderColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MainMenu;
