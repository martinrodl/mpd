import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 200,
    height: 600,
    backgroundColor: colors.primary,
  },
  modalTitle: {
    alignSelf: 'center',
    fontSize: 35,
    color: colors.black,
  },

  textModalInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingLeft: 20,
    marginTop: 5,
  },
  modalDescriptionTextInput: {
    color: colors.white,
    fontSize: 25,
  },
  modalTextInput: {
    height: 50,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 20,
    fontSize: 25,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 25,
  },
  modalAddButton: {
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    width: 280,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
  },
  modalAddButtonText: {
    color: colors.white,
    fontSize: 40,
  },
  buttonCloseModal: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top: -25,
  },

  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
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
    backgroundColor: colors.primary,
    padding: 10,
    margin: 10,
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
    color: colors.white,
    fontSize: 30,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
