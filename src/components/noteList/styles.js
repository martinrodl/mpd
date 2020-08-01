import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  formContainer: {
    flexDirection: 'row',
    height: 70,
    width: '100%',
    margin: 10,
    marginBottom: 0,
    flex: 1,
    padding: 10,
    paddingRight: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    paddingLeft: 20,
    alignItems: 'flex-start',
  },
  notesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 16,
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    paddingBottom: 16,
  },
  input: {
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  button: {
    height: '95%',
    borderRadius: 5,
    backgroundColor: colors.primary,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },

  entityText: {
    fontSize: 20,
    color: colors.black,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
});

export default styles;