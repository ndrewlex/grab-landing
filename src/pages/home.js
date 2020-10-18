import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { colors } from '../themes';
import Topbar from '../components/topbar';
import MainMenu from '../components/main-menu';
import BalanceInfo from '../components/balance';
import BannerViews from '../components/banner';
import imgBanner from '../assets/png/banner/main.png';
import imgPromo from '../assets/png/banner/promo1.png';

const HomePage = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Topbar />
      <BalanceInfo />
      <MainMenu />
      <View style={styles.section}>
        <BannerViews
          title="Dapatkan Combo hemat s.d 50% dengan Coke AYO"
          image={imgBanner}
          info="Sponsored by COCA-COLA"
        />
      </View>
      <View style={styles.section}>
        <View style={styles.subsection}>
          <Text style={styles.sectionHeading}>Kejar diskon GrabFood</Text>
          <View style={styles.sectionRow}>
            <View style={styles.sectionCol}>
              <BannerViews
                title="Kejar diskon menawan buat puas seharian!"
                image={imgPromo}
                info="Until 18 Oct"
              />
            </View>
            <View style={styles.sectionColEnd}>
              <BannerViews
                title="NgeGrabFood pakai kartu kredit/debit aja"
                image={imgPromo}
                info="Until 31 Oct"
              />
            </View>
          </View>
        </View>

        <View style={styles.subsection}>
          <View style={styles.sectionRow}>
            <View style={styles.sectionCol}>
              <BannerViews
                title="Kejar diskon menawan buat puas seharian!"
                image={imgPromo}
                info="Until 18 Oct"
              />
            </View>
            <View style={styles.sectionColEnd}>
              <BannerViews
                title="NgeGrabFood pakai kartu kredit/debit aja"
                image={imgPromo}
                info="Until 31 Oct"
              />
            </View>
          </View>
        </View>

        <View style={styles.subsection}>
          <View style={styles.sectionRow}>
            <View style={styles.sectionCol}>
              <BannerViews
                title="Kejar diskon menawan buat puas seharian!"
                image={imgPromo}
                info="Until 18 Oct"
              />
            </View>
            <View style={styles.sectionColEnd}>
              <BannerViews
                title="NgeGrabFood pakai kartu kredit/debit aja"
                image={imgPromo}
                info="Until 31 Oct"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green'
  },
  section: {
    padding: 15,
    borderWidth: 0.5,
    borderColor: colors.gray
  },
  subsection: {
    marginBottom: 20
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  sectionCol: {
    flex: 1,
    paddingRight: 10
  },
  sectionColEnd: {
    flex: 1,
    paddingRight: 0
  }
});

export default HomePage;
