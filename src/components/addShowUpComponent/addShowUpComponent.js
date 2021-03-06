import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'modal-react-native-web';
import moment from 'moment';

import styles from './styles';

export default function AddShowUpComponent({
  nameForm,
  textInputs,
  dateInputs,
  set,
  returnCallbackValue,
}) {
  const [close, setClose] = useState(false);
  const [formValue, setFormValue] = useState({});

  function onChangeFormValue(input, value) {
    setFormValue(Object.assign(formValue, { [input]: value }));
  }

  const handleSubmit = () => {
    returnCallbackValue(formValue);
    cleanFormData();
    setClose(false);
  };
  const onAddButtonPress = () => {
    setClose(true);
  };

  const cleanFormData = () => {
    const newObj = { ...formValue };
    for (const key in newObj) {
      newObj[key] = '';
    }
    setFormValue(newObj);
  };

  const renderTextInputs = (textInputs) => {
    return textInputs.map((input, index) => {
      return (
        <View style={styles.textModalInputContainer} key={index}>
          <Text style={styles.modalDescriptionTextInput}>{input}</Text>
          <TextInput
            name={input}
            style={styles.modalTextInput}
            placeholder={input}
            value={formValue[input]}
            onChange={(e) => {
              onChangeFormValue(input, e.target.value);
            }}
          ></TextInput>
        </View>
      );
    });
  };

  const renderDateInputs = (dateInputs) => {
    return dateInputs.map((input, index) => {
      return (
        <View style={styles.textModalInputContainer} key={index}>
          <Text style={styles.modalDescriptionTextInput}>{input}</Text>
          <TextInput
            style={styles.modalTextInput}
            value={formValue[input]}
            placeholder={moment().format('hh:mm')}
            onChange={(e) => {
              onChangeFormValue(input, e.target.value);
            }}
          ></TextInput>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.onCloseButtonContainer}>
        <TouchableOpacity
          style={styles.onCloseButton}
          onPress={onAddButtonPress}
        >
          <AntDesign name="plus" size={36} color="white" />
        </TouchableOpacity>
      </View>
      <Modal animationType="slide" transparent={true} visible={close}>
        <View style={styles.modalContainer}>
          <ImageBackground
            source={require('../../assets/green-design.jpg')}
            style={styles.image}
          >
            <View style={styles.buttonCloseModal}>
              <TouchableOpacity
                onPress={() => {
                  setClose(!close);
                }}
              >
                <View>
                  <AntDesign name="close" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <View>{textInputs && renderTextInputs(textInputs)}</View>
              <View>{dateInputs && renderDateInputs(dateInputs)}</View>
            </View>
            <View style={styles.modalAddButtonTextContainer}>
              <TouchableOpacity type="submit" onPress={handleSubmit}>
                <Text style={styles.modalAddButtonText}>
                  Click {set || 'Add'} {nameForm}
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Modal>
    </View>
  );
}
