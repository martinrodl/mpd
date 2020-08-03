import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  header: {
    paddingHorizontal: 30,
    height: 50,
    width: '100%',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E6E8F0',
    backgroundColor: '#F5F5F6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 25,
  },
  arrow: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
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
    fontSize: 20,
  },

  noteText: {
    fontSize: 20,
    color: colors.black,
  },
  noteTextResolved: {
    color: colors.grey,
    fontSize: 20,
    textDecorationColor: colors.grey,
    textDecorationLine: 'line-through',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
  removeButtonContainer: {
    position: 'absolute',
    top: 530,
    left: 330,
  },

  removeButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
});

export default styles;
