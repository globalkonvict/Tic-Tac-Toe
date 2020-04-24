import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class GameWon extends Component {
  render() {
    const {
      isGameDraw,
      isGameWon,
      player,
      show,
      toggleModal,
      replay,
    } = this.props;
    const playerWon =
      player === 'circle' ? ['Player O', 'Player X'] : ['Player X', 'Player 0'];
    return (
      <View style={styles.container}>
        <Modal isVisible={show}>
          <View style={styles.card}>
            <View style={styles.cardContainer}>
              <View style={styles.cardHeading}>
                <Image
                  style={styles.headerImage}
                  source={require('../img/trophy.png')}
                />
                <Text style={styles.title}>Game Over</Text>
              </View>
              <View style={styles.cardContents}>
                <View style={styles.playerList}>
                  <View style={styles.playerTextNumber}>
                    <Text style={styles.playerText}>1</Text>
                  </View>
                  <Text style={styles.playerText}>{playerWon[0]}</Text>
                </View>
                <View style={styles.playerList}>
                  <View style={styles.playerTextNumber}>
                    <Text style={styles.playerText}>2</Text>
                  </View>
                  <Text style={styles.playerText}>{playerWon[1]}</Text>
                </View>
                {isGameDraw && (
                  <Text style={styles.text}>This Game Is a DRAW</Text>
                )}
              </View>
              <View style={styles.cardAction}>
                <TouchableHighlight style={styles.button} onPress={replay}>
                  <Text style={styles.buttonText}>Replay</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.button} onPress={toggleModal}>
                  <Text style={styles.buttonText}>Close</Text>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(5),
  },
  title: {
    fontSize: hp(3.5),
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#651fff',
  },
  text: {
    fontSize: hp(2),
    textAlign: 'center',
    color: '#651fff',
  },
  card: {
    width: wp(90),
    height: hp(60),
    borderRadius: wp(5),
    backgroundColor: '#fbf9ac',
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardHeading: {
    width: '100%',
    padding: wp(5),
    paddingBottom: wp(15),
    marginBottom: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8c838',
    borderRadius: wp(10),
    borderBottomLeftRadius: wp(100),
    borderBottomRightRadius: wp(100),
  },
  headerImage: {
    width: wp(20),
    height: wp(20),
  },
  cardContents: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardAction: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: wp(5),
  },
  button: {
    width: wp(30),
    height: hp(6),
    padding: wp(5),
    backgroundColor: '#23b992',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(8),
  },
  buttonText: {
    fontSize: hp(2),
    color: 'white',
  },
  playerList: {
    width: wp(80),
    height: hp(6),
    backgroundColor: '#2144c5',
    marginBottom: wp(4),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  playerText: {
    fontSize: hp(2),
    color: 'white',
  },
  playerTextNumber: {
    backgroundColor: '#080912',
    height: hp(6),
    width: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp(20),
  },
});

export default GameWon;
