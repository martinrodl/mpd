import React, { useState } from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  CheckBox,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const mockData = [
  [
    { title: 'Shopping', resolved: false, id: 0, removed: false },
    { title: 'Doctor', resolved: false, id: 1, removed: false },
    { title: 'Fitness', resolved: false, id: 2, removed: false },
    { title: 'Running 10Km', resolved: false, id: 3, removed: false },
    { title: 'Shopping', resolved: false, id: 4, removed: false },
  ],
  [
    { title: 'Shopping', resolved: false, id: 0, removed: false },
    { title: 'Shopping', resolved: false, id: 1, removed: false },
    { title: 'Shopping', resolved: false, id: 2, removed: false },
    { title: 'Shopping', resolved: false, id: 3, removed: false },
    { title: 'Shopping', resolved: false, id: 4, removed: false },
  ],
];

import styles from './styles';

export default function NoteList({ entities, entityText }) {
  const [data, setData] = useState(mockData);
  const [actualList, setActualList] = useState(0);
  const [inputAddNote, setInputAddNote] = useState('');

  const changeCheckBox = (item) => {
    const newArr = [...data];
    newArr[actualList][item.id].resolved = !newArr[actualList][item.id]
      .resolved;
    setData(newArr);
  };

  const changeList = (dir) => {
    if (dir === 'right') setActualList(actualList + 1);
    if (actualList > 0 && dir === 'left') setActualList(actualList - 1);
  };

  const onAddButtonPress = (note) => {
    const newArr = [...data];
    newArr[actualList].push({
      title: note,
      resolved: false,
      id: newArr[actualList][newArr[actualList].length - 1].id + 1,
      removed: false,
    });
    setData(newArr);
  };

  const removeButton = () => {
    const newArr = [...data];
    newArr[actualList].forEach((item) => {
      if (item.resolved === true) item.removed = true;
    });
    setData(newArr);
  };

  const renderEntity = ({ item }) => {
    if (!item.removed) {
      return (
        <View style={styles.notesContainer}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity onPress={() => changeCheckBox(item)}>
              <CheckBox value={item.resolved} />
            </TouchableOpacity>
          </View>
          <Text style={styles.entityText}>{item.title}</Text>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => changeList('left')}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>List {actualList + 1}</Text>
        <TouchableOpacity onPress={() => changeList('right')}>
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
          onChangeText={(text) => setInputAddNote(text)}
          value={inputAddNote}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onAddButtonPress(inputAddNote)}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {entities && (
          <View style={styles.entityContainer}>
            <FlatList
              data={data[actualList]}
              renderItem={renderEntity}
              keyExtractor={(item) => item.id}
              removeClippedSubviews={true}
              extraData={data}
            />
          </View>
        )}
      </View>
      <View style={styles.removeButtonContainer}>
        <TouchableOpacity style={styles.removeButton} onPress={removeButton}>
          <EvilIcons name="trash" size={36} color="white" />
        </TouchableOpacity>
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
