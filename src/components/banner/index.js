import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const BannerViews = ({ title, image, info, infoIcon = null }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imgBanner} source={image} />
      <View>
        <Text style={styles.heading}>{title}</Text>
      </View>
      <View>
        <Text>{info}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  imgBanner: {
    width: '100%',
    borderRadius: 5
  },

  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5
  }
});

export default BannerViews;
