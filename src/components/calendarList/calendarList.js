import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import EventList from '../eventList/eventList';

import styles from './styles';
import AddShowUpComponent from '../addShowUpComponent/addShowUpComponent';
import { set } from 'react-native-reanimated';

const mockEvents = [
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

export default function CalendarList(props) {
  const [headDay, setHeaderDay] = useState(0);
  const [events, setEvents] = useState(mockEvents);

  const addEventFunction = (values) => {
    const newEvent = {
      title: values['Title'],
      summary: values['Description'],
      start:
        moment().add(headDay, 'days').format('YYYY-MM-DD') +
        ' ' +
        values['Start'],
      end:
        moment().add(headDay, 'days').format('YYYY-MM-DD') +
        ' ' +
        values['End'],
    };
    console.log(newEvent);
    const newArr = [...events];
    newArr.push(newEvent);
    setEvents(newArr);
  };

  const getDate = (date) => setHeaderDay(date - 30);

  console.log(EventList);
  return (
    <View style={styles.container}>
      <EventList
        events={events}
        getDate={getDate}
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
