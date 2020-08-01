import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
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
  const [close, setClose] = useState(true);
  const [formValue, setFormValues] = useState({});

  function onChangeFormValue(input, value) {
    setFormValues(Object.assign(formValue, { [input]: value }));
  }

  const handleSubmit = () => returnCallbackValue(formValue);

  const onAddButtonPress = () => {
    setClose(true);
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
            placeholder={moment().format('DD MM YYYY hh:mm')}
            onChange={(e) => {
              onChangeFormValue(input, e.target.value);
            }}
          ></TextInput>
        </View>
      );
    });
  };

  return (
    <View>
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
            <TouchableOpacity
              type="submit"
              style={styles.modalAddButton}
              onPress={handleSubmit}
            >
              <Text style={styles.modalAddButtonText}>
                Click {'Add' || set} {nameForm}
              </Text>
            </TouchableOpacity>
            <View>{textInputs && renderTextInputs(textInputs)}</View>
            <View>{dateInputs && renderDateInputs(dateInputs)}</View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
