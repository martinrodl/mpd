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
import RemoveShowUpComponent from '../removeShopUpComponent/removeShowUpComponent';

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

const contactsObject = contactsArray.map(function (name, index) {
  let arrName = name.split(' ');
  return {
    firstName: arrName[0],
    surName: arrName[1],
    email: arrName[1] + '@gmail.com',
    phone: 999999999,
    id: index,
  };
});

export default function ContactList() {
  const [search, setSearch] = useState('');
  const [contacts, setContacts] = useState(contactsObject);
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [close, setClose] = useState(false);
  const [clickedContact, setClickedContact] = useState({ open: false });

  const addContactFunction = (values) => {
    ['First Name', 'Second Name', 'Phone', 'Email'];
    const newContact = {
      firstName: values['First Name'],
      surName: values['Second Name'],
      phone: values['Phone'],
      email: values['Email'],
      id: contacts[contacts.length - 1].id + 1,
    };
    const newArr = [...contacts];
    newArr.push(newContact);
    setContacts(newArr);
    setFilteredContacts(newArr);
  };

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

  /*************************************** */
  const clickContact = (contact) => {
    const newObj = { ...contact };
    newObj.open = true;
    setClickedContact(newObj);
    setClose(true);
  };

  const removeContact = () => {
    let newArr = [...contacts];
    console.log(contacts);
    newArr = newArr.filter((e) => e.id != clickedContact.id);
    console.log(newArr);
    setContacts(newArr);
    setFilteredContacts(newArr);
    setClose(false);
  };

  const onChangeInput = (value, key) => {
    let newObj = { ...clickedContact };
    newObj[key] = value;
    setClickedContact(newObj);
  };

  const changeContact = () => {
    let newObj = { ...clickedContact };
    let newArr = [...contacts];
    newArr = newArr.filter((e) => e.id != newObj.id);
    newArr.push(newObj);
    setContacts(newArr);
    setFilteredContacts(newArr);
    setClose(false);
  };

  const setCloseShowUp = () => setClose(false);

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
        {filteredContacts
          .sort((a, b) =>
            a.surName > b.surName ? 1 : b.surName > a.surName ? -1 : 0
          )
          .map((person, index) => (
            <View style={styles.personContainer} key={person.id}>
              <TouchableOpacity onPress={() => clickContact(person)}>
                <View style={styles.nameContainer}>
                  <Ionicons name="md-person" size={24} color="black" />
                  <Text style={styles.text}>{person.firstName}</Text>
                  <Text style={styles.text}>{person.surName}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
      </ScrollView>
      <RemoveShowUpComponent
        nameForm={'Contact'}
        clickedEvent={clickedContact}
        type={'contact'}
        close={close}
        setCloseShowUp={setCloseShowUp}
        removeEvent={removeContact}
        changeEvent={changeContact}
        onChangeInput={onChangeInput}
      />
      <AddShowUpComponent
        nameForm={'Contact'}
        textInputs={['First Name', 'Second Name', 'Phone', 'Email']}
        returnCallbackValue={addContactFunction}
      />
    </View>
  );
}
