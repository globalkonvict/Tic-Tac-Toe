import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class Score extends Component {
  render() {
    const {playerX, playerO} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Score</Text>
        </View>
        <View style={styles.playerScoreContainer}>
          <Text style={styles.playerScore}>{playerX}</Text>
          <Text style={styles.playerName}>Player X</Text>
        </View>
        <View style={styles.bar} />
        <View style={styles.playerScoreContainer}>
          <Text style={styles.playerScore}>{playerO}</Text>
          <Text style={styles.playerName}>Player O</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: wp(80),
    marginBottom: wp(15),
    paddingBottom: wp(5),
    flexWrap: 'wrap',
    backgroundColor: '#fed766',
    borderRadius: wp(2),
    elevation: 2,
  },
  titleContainer: {
    width: wp(80),
    alignItems: 'center',
    marginBottom: wp(4),
  },
  title: {
    fontSize: wp(8),
  },
  playerScoreContainer: {
    padding: wp(3),
    alignItems: 'center',
    width: wp(30),
  },
  playerName: {
    fontSize: wp(6),
    color: '#143642',
  },
  playerScore: {
    fontSize: wp(6),
    color: '#143642',
  },
  bar: {
    width: wp(0.5),
    backgroundColor: '#390099',
    height: wp(18),
  },
});
