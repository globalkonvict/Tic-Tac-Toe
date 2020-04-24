import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default class Move extends Component {
  render() {
    const circle = require('../img/circle.png');
    const cross = require('../img/cross.png');
    let image = circle;

    this.props.move === 'circle' ? (image = circle) : (image = cross);

    if (this.props.show) {
      return (
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
        </View>
      );
    } else {
      return <Image />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: '80%',
    height: '80%',
  },
});
