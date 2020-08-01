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
import AddShowUpComponent from './addShowUpComponent/addShowUpComponent';

import colors from '../config/colors';

// mock data
const contactsArray = [
  'Mario Speedwagon',
  'Petey Cruiser',
  'Anna Sthesia',
  'Paul Molive',
  'Anna Mull',
  'Gail Forcewind',
  'Paige Turner',
  'Bob Frapples',
  'Peg Leg',
  'Jack E. Sack',
  'Marty Graw',
  'Ash Wednesday',
  'Olive Yu',
  'Gene Jacket',
  'Tom Atoe',
  'Doug Out',
];

const contactsObject = contactsArray.map(function (name) {
  let arrName = name.split(' ');
  return {
    firstName: arrName[0],
    surName: arrName[1],
    email: arrName + '@gmail.com',
    phone: 999999999,
  };
});

export default function ContactList() {
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState(contactsObject);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [addContactVisible, setAddContactVisible] = useState(false);

  const onAddButtonPress = () => {
    setAddContactVisible(!addContactVisible);
  };

  const addContactFunction = (values) => console.log(values);

  const filterContacts = (text) => {
    setSearch(text);

    setFilteredContacts(
      contacts.filter(
        (contact) =>
          contact.firstName.toLowerCase().includes(text.toLowerCase()) ||
          contact.surName.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.formContainer}>
        <View style={styles.searchContainer}>
          <View style={styles.icon}>
            <AntDesign name="search1" size={36} color="black" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Search contact"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => filterContacts(text)}
            value={search}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={onAddButtonPress}>
          <AntDesign name="plus" size={36} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        {filteredContacts.map((person, index) => (
          <View style={styles.personContainer} key={index}>
            <View style={styles.nameContainer}>
              <Text style={styles.text}>{person.firstName}</Text>
              <Text style={styles.text}>{person.surName}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <AddShowUpComponent
        nameForm={'Contact'}
        textInputs={['First Name', 'Second Name', 'Phone', 'Email']}
        dateInputs={['Notification']}
        returnCallbackValue={addContactFunction}
      />
    </View>
  );
}

const styles = StyleSheet.create({
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
  modalAddButton: {
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.secondary,
    width: 280,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
  },
  modalAddButtonText: {
    color: colors.white,
    fontSize: 40,
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

  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },

  personContainer: {
    flexDirection: 'row',
  },

  nameContainer: {
    flexDirection: 'row',
    height: 50,
    width: '70%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    widht: '60%',
    borderRadius: 20,
    height: 50,
    backgroundColor: colors.white,
  },
  icon: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  input: {
    height: '100%',
    paddingLeft: 16,
    flex: 1,
    overflow: 'hidden',
  },
  formContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 30,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
