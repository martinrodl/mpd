import React, { useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
const _ = require('lodash');
import { AntDesign } from '@expo/vector-icons';

import colors from '../config/colors';
import AddShowUpComponent from './addShowUpComponent/addShowUpComponent';

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

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: 1,
  },
  headBar: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
  },

  scrollViewContainer: {
    width: '100%',
  },
  timetable: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
  },
  numberContainer: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
});
