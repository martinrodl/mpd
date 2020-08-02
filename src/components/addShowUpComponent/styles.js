import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: Dimensions.get('window').width - 50,
    top: Dimensions.get('window').height - 100,
  },
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
  modalAddButtonTextContainer: {
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: colors.primary,
    width: 350,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalAddButtonText: {
    color: colors.black,
    fontSize: 35,
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
  onCloseButtonContainer: {
    position: 'absolute',
    top: -100,
    left: -30,
  },

  onCloseButton: {
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
