import React, {Component} from 'react';
import {View, TouchableWithoutFeedback} from 'react-native';
import styles from './GameBoardStyles';
import Move from './Move';
import GameWon from './GameWon';
import Score from './Score';

export default class GameBoard extends Component {
  constructor() {
    super();
    this.state = {
      lastMove: 'cross',
      numberOfMoves: 0,
      isGameWon: false,
      isGameDraw: false,
      showModal: false,
      moves: {
        first: ['1', false, false],
        second: ['2', false, false],
        third: ['3', false, false],
        fourth: ['4', false, false],
        fifth: ['5', false, false],
        sixth: ['6', false, false],
        seventh: ['7', false, false],
        eighth: ['8', false, false],
        nineth: ['9', false, false],
      },
      scoreX: 0,
      scoreO: 0,
    };
    this.initialState = this.state;
    this.movesData = [
      {key: 'first', style: styles.boxBorderLeftTop},
      {key: 'second', style: styles.boxBorderTop},
      {key: 'third', style: styles.boxBorderRightTop},
      {key: 'fourth', style: styles.boxBorderLeft},
      {key: 'fifth', style: styles.box},
      {key: 'sixth', style: styles.boxBorderRight},
      {key: 'seventh', style: styles.boxBorderLeftBottom},
      {key: 'eighth', style: styles.boxBorderBottom},
      {key: 'nineth', style: styles.boxBorderRightBottom},
    ];
  }

  checkWining = e => {
    const {
      first,
      second,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      nineth,
    } = this.state.moves;

    const isGameWonTest =
      (first[0] === second[0] && second[0] === third[0]) ||
      (fourth[0] === fifth[0] && fifth[0] === sixth[0]) ||
      (seventh[0] === eighth[0] && eighth[0] === nineth[0]) ||
      (first[0] === fifth[0] && fifth[0] === nineth[0]) ||
      (third[0] === fifth[0] && fifth[0] === seventh[0]) ||
      (first[0] === fourth[0] && fourth[0] === seventh[0]) ||
      (second[0] === fifth[0] && fifth[0] === eighth[0]) ||
      (third[0] === sixth[0] && sixth[0] === nineth[0]);

    isGameWonTest &&
      this.setState({...this.state, isGameWon: true}, () => {
        this.toggleModal();
      });

    if (this.state.numberOfMoves === 9 && !isGameWonTest) {
      this.setState({...this.setState, isGameDraw: true}, () => {
        this.toggleModal();
      });
    } else if (isGameWonTest && this.state.lastMove === 'cross') {
      this.setState(
        {...this.state, isGameWon: true, scoreX: this.state.scoreX + 1},
        () => {
          this.toggleModal();
        },
      );
    } else if (isGameWonTest && this.state.lastMove === 'circle') {
      this.setState(
        {...this.state, isGameWon: true, scoreO: this.state.scoreO + 1},
        () => {
          this.toggleModal();
        },
      );
    }
  };

  handleTouch = param => event => {
    const checkMove = (para, move) => {
      return this.state.lastMove === move && !this.state.moves[para][2];
    };

    if (checkMove(param, 'circle')) {
      !this.state.isGameWon &&
        this.setState(
          {
            ...this.state,
            numberOfMoves: this.state.numberOfMoves + 1,
            lastMove: 'cross',
            moves: {
              ...this.state.moves,
              [param]: ['cross', true, true],
            },
          },
          this.checkWining,
        );
    }
    if (checkMove(param, 'cross')) {
      !this.state.isGameWon &&
        this.setState(
          {
            ...this.state,
            numberOfMoves: this.state.numberOfMoves + 1,
            lastMove: 'circle',
            moves: {
              ...this.state.moves,
              [param]: ['circle', true, true],
            },
          },
          this.checkWining,
        );
    }
  };

  toggleModal = () => {
    this.setState(state => ({...state, showModal: !this.state.showModal}));
  };

  replay = () => {
    this.setState({
      ...this.initialState,
      scoreO: this.state.scoreO,
      scoreX: this.state.scoreX,
    });
  };

  render() {
    const {
      isGameDraw,
      isGameWon,
      lastMove: player,
      scoreO,
      scoreX,
    } = this.state;
    return (
      <>
        <Score playerX={scoreX} playerO={scoreO} />
        <View style={styles.container}>
          {this.movesData.map(item => {
            return (
              <TouchableWithoutFeedback
                onPress={this.handleTouch(item.key)}
                key={item.key}>
                <View style={item.style}>
                  <Move
                    move={this.state.moves[item.key][0]}
                    show={this.state.moves[item.key][1]}
                  />
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <GameWon
          toggleModal={this.toggleModal}
          show={this.state.showModal}
          replay={this.replay}
          isGameWon={isGameWon}
          isGameDraw={isGameDraw}
          player={player}
        />
      </>
    );
  }
}
