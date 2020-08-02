import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import EventList from '../eventList/eventList';

import styles from './styles';
import AddShowUpComponent from '../addShowUpComponent/addShowUpComponent';

export default function CalendarList() {
  const addEventFunction = (values) => console.log(values);

  return (
    <View style={styles.container}>
      <EventList
        style={{
          event: { color: 'pink' },
        }}
      ></EventList>
      <AddShowUpComponent
        nameForm={'Event'}
        textInputs={['Title', 'Description']}
        dateInputs={['Start', 'End']}
        returnCallbackValue={addEventFunction}
      />
    </View>
  );
}
