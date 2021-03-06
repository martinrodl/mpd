import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';
import EventList from '../eventList/eventList';

import styles from './styles';
import AddShowUpComponent from '../addShowUpComponent/addShowUpComponent';
import RemoveShowUpComponent from '../removeShopUpComponent/removeShowUpComponent';
import CalendarOpen from '../calendarOpen/calendarOpen';

import mockEvents from './mockEvents.js';

export default function CalendarList(props) {
  const [headDay, setHeaderDay] = useState(moment().format('YYYY-MM-DD'));
  const [events, setEvents] = useState(mockEvents);
  const [clickedEvent, setClickedEvent] = useState({ open: false });
  const [close, setClose] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);

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
      id: events[events.length - 1].id + 1,
    };
    const newArr = [...events];
    newArr.push(newEvent);
    setEvents(newArr);
  };

  const clickEvent = (event) => {
    const newObj = { ...event };
    newObj.open = true;
    setClickedEvent(newObj);
    setClose(true);
  };

  const removeEvent = (event) => {
    let newArr = [...events];
    newArr = newArr.filter((e) => e.id != event.id);
    setEvents(newArr);
    setClose(false);
  };

  const onChangeInput = (value, key) => {
    let newObj = { ...clickedEvent };
    newObj[key] = value;
    setClickedEvent(newObj);
  };

  const changeEvent = () => {
    let newObj = { ...clickedEvent };
    let newArr = [...events];
    newArr = newArr.filter((e) => e.id != newObj.id);
    newArr.push(newObj);
    setEvents(newArr);
    setClose(false);
  };

  const setCloseShowUp = () => setClose(false);
  const getDate = (date) => {
    console.log(date);
    setHeaderDay(date - 30);
  };

  const changeDay = (day) => {
    console.log(day);
    setCalendarOpen(false);
    setHeaderDay(day.dateString);
  };

  const dateChanged = (day) => console.log(day);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setCalendarOpen(true)}
        style={{
          position: 'absolute',
          top: -20,
          left: 100,
          height: 70,
          width: 200,
          backgroundColor: 'transparent',
          zIndex: 100,
        }}
      ></TouchableOpacity>
      <EventList
        events={events}
        getDate={getDate}
        changeEvent={clickEvent}
        initDate={headDay}
        dateChanged={dateChanged}
      ></EventList>
      <RemoveShowUpComponent
        nameForm={'Event'}
        clickedEvent={clickedEvent}
        type={'event'}
        close={close}
        setCloseShowUp={setCloseShowUp}
        removeEvent={removeEvent}
        changeEvent={changeEvent}
        onChangeInput={onChangeInput}
      />
      <AddShowUpComponent
        nameForm={'Event'}
        textInputs={['Title', 'Description']}
        dateInputs={['Start', 'End']}
        returnCallbackValue={addEventFunction}
      />
      <CalendarOpen visible={calendarOpen} changeDay={changeDay} />
    </View>
  );
}
