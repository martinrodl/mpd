import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'modal-react-native-web';
import { Calendar } from 'react-native-calendars';

import colors from '../../config/colors';

export default function CalendarOpen({ visible, changeDay }) {
  const clickDay = (day) => {
    console.log(day);
    changeDay(day);
  };

  return (
    <View style={{ flex: 1 }}>
      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        style={styles.modal}
      >
        <View style={styles.container}>
          <Calendar
            onDayPress={clickDay}
            hideExtraDays={true}
            hideArrows={false}
            renderArrow={(direction) => {
              if (direction == 'left') return <Text>{'<'}</Text>;
              if (direction == 'right') return <Text>{'>'}</Text>;
            }}
            markedDates={{
              '2020-08-04': {
                selected: true,
                selectedColor: colors.primary,
              },
              '2020-08-17': {
                marked: true,
                dotColor: colors.primary,
              },
              '2020-08-18': {
                marked: true,
                dotColor: colors.primary,
              },
            }}
            style={{
              height: 350,
            }}
            theme={{
              backgroundColor: colors.white,
              calendarBackground: colors.white,
              textSectionTitleColor: colors.primary,
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#00adf5',
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              monthTextColor: colors.primary,
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    height: 500,
    width: 300,
    flex: 1,
    alignSelf: 'center',
  },
});
