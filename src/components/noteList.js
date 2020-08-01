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
import AddShowUpComponent from './addShowUpComponent/addShowUpComponent';

import colors from '../config/colors';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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
    fontSize: 16,
  },

  entityText: {
    fontSize: 20,
    color: colors.black,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginRight: 20,
  },
});
