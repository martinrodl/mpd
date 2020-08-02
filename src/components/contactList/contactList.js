import React, { useState } from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AddShowUpComponent from '../addShowUpComponent/addShowUpComponent';

import styles from './styles';

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
    <View style={styles.container}>
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
      </View>
      <ScrollView style={styles.scrollViewContainer}>
        {filteredContacts.map((person, index) => (
          <View style={styles.personContainer} key={index}>
            <View style={styles.nameContainer}>
              <Ionicons name="md-person" size={24} color="black" />
              <Text style={styles.text}>{person.firstName}</Text>
              <Text style={styles.text}>{person.surName}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <AddShowUpComponent
        nameForm={'Contact'}
        textInputs={['First Name', 'Second Name', 'Phone', 'Email']}
        returnCallbackValue={addContactFunction}
      />
    </View>
  );
}
