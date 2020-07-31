import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Modal from 'modal-react-native-web';

import styles from './styles';

export default function AddShowUpComponent({
  nameForm,
  textInputs,
  dateInputs,
}) {
  const [close, setClose] = useState(true);

  const renderTextInputs = (textInputs) => {
    return textInputs.map((input, index) => {
      return (
        <View style={styles.textModalInputContainer} key={index}>
          <Text style={styles.modalDescriptionTextInput}>input</Text>
          <TextInput
            style={styles.modalTextInput}
            placeholder={input}
          ></TextInput>
        </View>
      );
    });
  };

  const renderDateInputs = (dateInputs) => {
    return dateInputs.map((input, index) => {
      return (
        <View style={styles.textModalInputContainer} key={index}>
          <Text style={styles.modalDescriptionTextInput}>input</Text>
          <TextInput
            style={styles.modalTextInput}
            placeholder={new Date.now()}
          ></TextInput>
        </View>
      );
    });
  };

  console.log(renderTextInputs(textInputs));
  return (
    <View>
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
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.modalTitle}>{'Add ' + nameForm}</Text>
            </View>
            <View>{textInputs && renderTextInputs(textInputs)}</View>
            <TouchableOpacity style={styles.modalAddButton} onPress={() => {}}>
              <Text style={styles.modalAddButtonText}>Add {nameForm}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
