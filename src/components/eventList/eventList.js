import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window');

const events = [
  {
    start: '2020-08-07 00:30:00',
    end: '2020-08-07 01:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-07 01:30:00',
    end: '2020-08-07 02:20:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-07 04:10:00',
    end: '2020-08-07 04:40:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-07 01:05:00',
    end: '2020-08-07 01:45:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-07 14:30:00',
    end: '2020-08-07 16:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-08 01:20:00',
    end: '2020-08-08 02:20:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-08 04:10:00',
    end: '2020-08-08 04:40:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-08 00:45:00',
    end: '2020-08-08 01:45:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-08 11:30:00',
    end: '2020-08-08 12:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-09 01:30:00',
    end: '2020-08-09 02:00:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-09 03:10:00',
    end: '2020-08-09 03:40:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
  {
    start: '2020-08-09 00:10:00',
    end: '2020-08-09 01:45:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
  },
];

export default function EventList() {
  return (
    <View>
      <EventCalendar
        eventTapped={() => console.log('test')}
        events={events}
        width={width}
        //initDate={'2017-09-08'}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
