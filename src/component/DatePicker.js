import { Button, Text, View } from "native-base";
import * as React from "react";
import { useState } from "react";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";


export default function DatePicker(props) {
  const {setShowTimePicker} = props;
  const [day, setDay] = useState(new Date().toISOString().substr(0, 10));
  const selectDay = (day) => {
    setDay(day.dateString);
    setShowTimePicker(true);
    // console.log(day.dateString);
  };
  return (
    <View>
      <Calendar 
      onDayPress = {selectDay}
      disableAllTouchEventsForDisabledDays={true}
      markedDates={{
        '2021-05-16': {selected: true, marked: true, selectedColor: '#fc8e8e'},
        '2021-05-17': {marked: true, disabled: true},
        '2021-05-18': {marked: true, disabled: true, dotColor: 'red', activeOpacity: 0},
        '2021-05-19': {disabled: true, disableTouchEvent: true}
      }}
      />
      <Text>{day}</Text>
    </View>
  );
}
