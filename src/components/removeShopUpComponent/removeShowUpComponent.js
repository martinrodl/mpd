import React, { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Modal from 'modal-react-native-web';
import moment from 'moment';
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';

export default function RemoveShopUpComponent({
  nameForm,
  clickedEvent,
  type,
  close,
  setCloseShowUp,
  removeEvent,
  changeEvent,
}) {
  const [formValue, setFormValue] = useState(clickedEvent);

  const handleSubmit = () => {
    returnCallbackValue(value);
    cleanFormData();
    setClose(false);
  };

  const cleanFormData = () => {
    const newObj = { ...clickedEvent };
    for (const key in newObj) {
      newObj[key] = '';
    }
    setFormValue(newObj);
  };

  const renderTextInputs = () => {
    if (type === 'event') {
      return (
        <View>
          <View style={styles.textModalInputContainer}>
            <Text style={styles.modalDescriptionTextInput}>Title</Text>
            <TextInput
              name={clickedEvent.title}
              style={styles.modalTextInput}
              value={clickedEvent.title}
              onChange={(e) => {
                onChangeFormValue(clickedEvent.title, e.target.value);
              }}
            />
          </View>
          <View style={styles.textModalInputContainer}>
            <Text style={styles.modalDescriptionTextInput}>Description</Text>
            <TextInput
              name={clickedEvent.title}
              style={styles.modalTextInput}
              value={clickedEvent.summary}
              onChange={(e) => {
                onChangeFormValue(clickedEvent.title, e.target.value);
              }}
            />
          </View>
          <View style={styles.textModalInputContainer}>
            <Text style={styles.modalDescriptionTextInput}>Start</Text>
            <TextInput
              name={clickedEvent.start}
              style={styles.modalTextInput}
              value={clickedEvent.start}
              onChange={(e) => {
                onChangeFormValue(start, e.target.value);
              }}
            />
          </View>
          <View style={styles.textModalInputContainer}>
            <Text style={styles.modalDescriptionTextInput}>End</Text>
            <TextInput
              name={clickedEvent.end}
              style={styles.modalTextInput}
              value={clickedEvent.end}
              onChange={(e) => {
                onChangeFormValue(clickedEvent.end, e.target.value);
              }}
            />
          </View>
        </View>
      );
    }
    if (false && type === 'contact') {
      return (
        <View style={styles.textModalInputContainer} key={formValue.id}>
          <Text style={styles.modalDescriptionTextInput}>First Name</Text>
          <TextInput
            name={firstName}
            style={styles.modalTextInput}
            value={clickedEvent.firstName}
            onChange={(e) => {
              onChangeFormValue(firstName, e.target.value);
            }}
          />
          <Text style={styles.modalDescriptionTextInput}>Description</Text>
          <TextInput
            name={surName}
            style={styles.modalTextInput}
            value={clickedEvent.surName}
            onChange={(e) => {
              onChangeFormValue(surName, e.target.value);
            }}
          />
          <Text style={styles.modalDescriptionTextInput}>Phone</Text>
          <TextInput
            name={phone}
            style={styles.modalTextInput}
            value={clickedEvent.phone}
            onChange={(e) => {
              onChangeFormValue(phone, e.target.value);
            }}
          />
          <Text style={styles.modalDescriptionTextInput}>Email</Text>
          <TextInput
            name={email}
            style={styles.modalTextInput}
            value={clickedEvent.email}
            onChange={(e) => {
              onChangeFormValue(email, e.target.value);
            }}
          />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={close}>
        <View style={styles.modalContainer}>
          <ImageBackground
            source={require('../../assets/green-design.jpg')}
            style={styles.image}
          >
            <View style={styles.buttonCloseModal}>
              <TouchableOpacity onPress={setCloseShowUp}>
                <View>
                  <AntDesign name="close" size={24} color="white" />
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <View style={styles.modalAddButtonTextContainer}>
                <TouchableOpacity
                  type="submit"
                  onPress={() => changeEvent(formData)}
                >
                  <Text style={styles.modalAddButtonText}>
                    Click {'Set'} {nameForm}
                  </Text>
                </TouchableOpacity>
              </View>
              <View>{formValue && renderTextInputs(formValue)}</View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.onTrashButtonContainer}>
          <TouchableOpacity
            style={styles.onTrashButton}
            onPress={() => removeEvent(clickedEvent)}
          >
            <EvilIcons name="trash" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
