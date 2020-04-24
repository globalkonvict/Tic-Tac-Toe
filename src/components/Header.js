import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.player} source={require('../img/Tic.png')} />
        <Text style={styles.title}>  Tic ✗ Tac ✗ Toe  </Text>
        <Image style={styles.player} source={require('../img/Tic.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: wp(4),
    width: wp(100),
    elevation: 10,
    backgroundColor: '#fed766',
    borderBottomRightRadius: wp(10),
    borderBottomLeftRadius: wp(10),
  },
  title: {
    fontSize: hp(3),
    textAlign: 'center',
    color: '#143642',
  },
  player: {
    width: wp(12),
    height: wp(12),
  },
});
