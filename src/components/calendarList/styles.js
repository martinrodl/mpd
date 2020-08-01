import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  headBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
  },

  scrollViewContainer: {
    width: '100%',
  },
  timetable: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  numberContainer: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});

export default styles;
