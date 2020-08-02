import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window');

export default function EventList({ events }) {
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
