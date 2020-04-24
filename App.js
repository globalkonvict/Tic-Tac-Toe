import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import GameBoard from './src/components/GameBoard';
import Header from './src/components/Header';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.screen}>
          <View style={styles.header}>
            <Header />
          </View>
          <View style={styles.contents}>
            <GameBoard />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Made by Sarthak</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffc914',
  },
  header: {
    flex: 0.08,
    justifyContent: 'center',
  },
  contents: {
    flex: 0.85,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer: {
    flex: 0.07,
    backgroundColor: '#fed766',
    justifyContent: 'center',
  },
  title: {
    fontSize: hp(2.5),
    textAlign: 'center',
    color: '#143642',
  },
});

export default App;
