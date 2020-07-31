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
});

export default styles;
