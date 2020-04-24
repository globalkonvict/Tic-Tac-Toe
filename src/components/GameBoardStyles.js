import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const $borderColor = '#fdf58d';
const $backgroundColor = '#165985';
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: wp(80),
    padding: wp(5),
    elevation: 15,
    backgroundColor: $backgroundColor,
    borderRadius: wp(10),
  },
  box: {
    width: '33.33%',
    aspectRatio: 1,
    borderColor: $borderColor,
    borderWidth: 1,
  },
  boxBorderLeftTop: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderBottomColor: $borderColor,
    borderTopColor: 'transparent',
    borderRightColor: $borderColor,
  },
  boxBorderTop: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderLeftColor: $borderColor,
    borderBottomColor: $borderColor,
    borderTopColor: 'transparent',
    borderRightColor: $borderColor,
  },
  boxBorderRightTop: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderLeftColor: $borderColor,
    borderBottomColor: $borderColor,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
  },
  boxBorderRight: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderLeftColor: $borderColor,
    borderBottomColor: $borderColor,
    borderTopColor: $borderColor,
    borderRightColor: 'transparent',
  },
  boxBorderLeft: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderBottomColor: $borderColor,
    borderTopColor: $borderColor,
    borderRightColor: $borderColor,
  },
  boxBorderLeftBottom: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    borderTopColor: $borderColor,
    borderRightColor: $borderColor,
  },
  boxBorderBottom: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderLeftColor: $borderColor,
    borderBottomColor: 'transparent',
    borderTopColor: $borderColor,
    borderRightColor: $borderColor,
  },
  boxBorderRightBottom: {
    width: '33.33%',
    aspectRatio: 1,
    borderWidth: 1,
    borderLeftColor: $borderColor,
    borderBottomColor: 'transparent',
    borderTopColor: $borderColor,
    borderRightColor: 'transparent',
  },
});

export default styles;
