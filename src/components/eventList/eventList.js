import React from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import EventCalendar from 'react-native-events-calendar';

let { width } = Dimensions.get('window');

export default function EventList({ events, getDate, changeEvent }) {
  return (
    <View>
      <EventCalendar
        eventTapped={changeEvent}
        events={events}
        width={width}
        getDate={getDate}
        //initDate={'2017-09-08'}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
