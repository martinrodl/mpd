import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  CheckBox,
} from 'react-native';

const mockData = [
  [
    { title: 'Shopping', resolved: 'false', id: 0 },
    { title: 'Shopping', resolved: 'true', id: 1 },
    { title: 'Shopping', resolved: 'false', id: 2 },
    { title: 'Shopping', resolved: 'false', id: 3 },
    { title: 'Shopping', resolved: 'true', id: 4 },
  ],
  [
    { title: 'Shopping', resolved: 'false', id: 0 },
    { title: 'Shopping', resolved: 'false', id: 1 },
    { title: 'Shopping', resolved: 'false', id: 2 },
    { title: 'Shopping', resolved: 'false', id: 3 },
    { title: 'Shopping', resolved: 'true', id: 4 },
  ],
];

import styles from './styles';

export default function NoteList({ entities, entityText, onAddButtonPress }) {
  const [data, setData] = useState(mockData);

  const changeDone = (item) => {
    const newArr = [...data];
    newArr[0][item.id].resolved = !newArr[0][item.id].resolved;
    setData(newArr);
  };

  const addNoteFunction = (values) => console.log(values);

  const renderEntity = ({ item, index }) => {
    return (
      <View style={styles.notesContainer}>
        <View style={styles.checkboxContainer}>
          <TouchableOpacity onPress={() => changeDone(item)}>
            <CheckBox
              value={item.resolved}
              tintColors={{ true: '#F15927', false: 'black' }}
              checkedColor={'#fff'}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.entityText}>{item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => console.log('left')}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{'List 1'}</Text>
        <TouchableOpacity onPress={() => () => console.log('rigth')}>
          <Image
            source={require('../../assets/forward.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>

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
              data={data[0]}
              renderItem={renderEntity}
              keyExtractor={(item) => item.id}
              removeClippedSubviews={true}
              extraData={data}
            />
          </View>
        )}
      </View>
    </View>
  );
}

/*

      <AddShowUpComponent
        nameForm={'Note'}
        textInputs={['Title', 'Description']}
        dateInputs={['Notification']}
        returnCallbackValue={addNoteFunction}
      />

*/
