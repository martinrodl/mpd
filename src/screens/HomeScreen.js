import React, { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons, AntDesign, FontAwesome } from '@expo/vector-icons';

import { firebase } from '../firebase/config';
import colors from '../config/colors';
import CalendarList from '../components/calendarList';
import ContactList from '../components/contactList';
import NoteList from '../components/noteList';

export default function HomeScreen(props) {
  const [entityText, setEntityText] = useState('');
  const [entities, setEntities] = useState([]);

  const entityRef = firebase.firestore().collection('entities');
  const userID = props.extraData.id;

  useEffect(() => {
    entityRef
      .where('authorID', '==', userID)
      .orderBy('createdAt', 'desc')
      .onSnapshot(
        (querySnapshot) => {
          const newEntities = [];
          querySnapshot.forEach((doc) => {
            const entity = doc.data();
            entity.id = doc.id;
            newEntities.push(entity);
          });
          setEntities(newEntities);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  const onAddButtonPress = () => {
    if (entityText && entityText.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        text: entityText,
        authorID: userID,
        createdAt: timestamp,
      };
      entityRef
        .add(data)
        .then((_doc) => {
          setEntityText('');
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="NoteList"
      activeColor={colors.white}
      inactiveColor={colors.black}
      barStyle={{
        backgroundColor: colors.primary,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden',
        paddingBottom: 5,
      }}
    >
      <Tab.Screen
        name="CalendarList"
        component={CalendarList}
        options={{
          tabBarLabel: 'Calendar',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="calendar" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="NoteList"
        options={{
          tabBarLabel: 'Notes',
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="note" size={24} color={color} />
          ),
        }}
      >
        {() => (
          <NoteList
            entities={entities}
            entityText={entityText}
            onAddButtonPress={onAddButtonPress}
          />
        )}
      </Tab.Screen>
      <Tab.Screen
        name="ContacList"
        component={ContactList}
        options={{
          tabBarLabel: 'Contacts',
          tabBarIcon: ({ color }) => (
            <AntDesign name="contacts" size={24} color={color} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
