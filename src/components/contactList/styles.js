import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  personContainer: {
    flexDirection: 'row',
  },

  nameContainer: {
    flexDirection: 'row',
    height: 50,
    width: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 10,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    widht: '60%',
    borderRadius: 20,
    height: 50,
    backgroundColor: colors.white,
  },
  icon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  input: {
    height: '100%',
    paddingLeft: 16,
    flex: 1,
    overflow: 'hidden',
  },
  formContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.black,
    fontSize: 20,
    paddingLeft: 10,
  },
});

export default styles;
