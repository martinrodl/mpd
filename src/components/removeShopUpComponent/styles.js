import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    resizeMode: 'cover',
    height: '100%',
  },
  modalContainer: {
    marginTop: 300,
    height: 500,
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
    marginTop: 0,
  },
  modalDescriptionTextInput: {
    color: colors.white,
    fontSize: 20,
  },
  modalTextInput: {
    height: 40,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 20,
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 25,
  },
  modalAddButtonTextContainer: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
    width: 350,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalAddButtonText: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 'bold',
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
  onTrashButtonContainer: {
    position: 'absolute',
    top: 670,
    left: 340,
  },

  onTrashButton: {
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
