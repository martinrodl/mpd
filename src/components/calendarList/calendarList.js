import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
const _ = require('lodash');
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
import AddShowUpComponent from '../addShowUpComponent/addShowUpComponent';

export default function CalendarList2() {
  const hours = _.range(8, 21);

  const addEventFunction = (values) => console.log(values);

  return (
    <View style={styles.container}>
      <View style={styles.headBar}>
        <AntDesign name="left" size={24} color="black" />
        <Text>Today Agenda</Text>
        <AntDesign name="right" size={24} color="black" />
      </View>

      <ScrollView style={styles.scrollViewContainer}>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <View style={styles.hoursContainer}>
            {hours.map((hour, index) => (
              <View style={styles.numberContainer} key={index}>
                <Text>{hour}</Text>
              </View>
            ))}
          </View>
          <View style={styles.timetable}></View>
        </View>
      </ScrollView>
      <AddShowUpComponent
        nameForm={'Event'}
        textInputs={['Title', 'Description']}
        dateInputs={['Start', 'End']}
        returnCallbackValue={addEventFunction}
      />
    </View>
  );
}
