import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  CheckBox,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AddShowUpComponent from '../addShowUpComponent/addShowUpComponent';

import styles from './styles';

const renderEntity = ({ item, index }) => {
  return (
    <View style={styles.notesContainer}>
      <View style={styles.checkboxContainer}>
        <CheckBox value={false} />
      </View>
      <Text style={styles.entityText}>{item.text}</Text>
    </View>
  );
};

export default function NoteList({ entities, entityText, onAddButtonPress }) {
  const addNoteFunction = (values) => console.log(values);

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add new note"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEntityText(text)}
          value={entityText}
        />
        <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {entities && (
          <View style={styles.entityContainer}>
            <FlatList
              data={entities}
              renderItem={renderEntity}
              keyExtractor={(item) => item.id}
              removeClippedSubviews={true}
            />
          </View>
        )}
      </View>
      <AddShowUpComponent
        nameForm={'Note'}
        textInputs={['Title', 'Description']}
        dateInputs={['Notification']}
        returnCallbackValue={addNoteFunction}
      />
    </View>
  );
}
