import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
import { availableHour, availableMinutes } from "../helpers/helper";
const operationHour = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const operationMin = [0, 30];
let instructorTime = [
  // { start: 9, end: 12.5 },
  // { start: 14, end: 17 },
];
let timeBooked = [34200, 55800];

const hourArr = availableHour(operationHour, instructorTime, timeBooked).map(
  (hour) => {
    return { label: `${hour}`, value: hour * 3600 };
  }
);

const minArr = availableMinutes(
  operationMin,
  instructorTime,
  timeBooked,
  Number(hourArr[0].label)
).map((min) => {
  return { label: `${min}`, value: min * 60 };
});

export default function TimePicker(props) {
  const { setShowTimePicker } = props;
  const [selectedHour, setSelectedHour] = useState(hourArr[0].label);
  const [availableMin, setAvailableMin] = useState(minArr);
  const [selectedMin, setSelectedMin] = useState(minArr[0].label);
  // console.log(selectedHour / 3600);
  // console.log(availableMin);
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["rgba(169, 218, 214, 1)", "rgba(169, 218, 214, .2)"]}
        style={styles.background}
      >
        <Text style={styles.header}>Pick a schedule</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            flex: 4,
          }}
        >
          <Picker
            selectedValue={selectedHour}
            itemStyle={{ fontSize: 15 }}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => {
              setSelectedHour(itemValue);
              let arr = availableMinutes(
                operationMin,
                instructorTime,
                timeBooked,
                itemValue / 3600
              ).map((min) => {
                return { label: `${min}`, value: min * 60 };
              });
              setAvailableMin(arr);
            }}
          >
            {hourArr.map((time, index) => (
              <Picker.Item key={index} label={time.label} value={time.value} />
            ))}
          </Picker>
          <Picker
            itemStyle={{ fontSize: 15 }}
            selectedValue={selectedMin}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => setSelectedMin(itemValue)}
          >
            {availableMin.map((time, index) => (
              <Picker.Item key={index} label={time.label} value={time.value} />
            ))}
          </Picker>
        </View>
        <Button style={styles.confirmButton}>
          <Text style={styles.confirmText}>Confirm</Text>
        </Button>
        <Button
          style={styles.cancelButton}
          onPress={() => setShowTimePicker(false)}
        >
          <Icon name="cancel" style={styles.icon} />
        </Button>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    flex: 1,
    width: "98%",
    height: "40%",
    overflow: "hidden",
    backgroundColor: "#fff",
    bottom: 0,
  },
  background: { flex: 1, paddingTop: "5%", paddingBottom: "2%" },
  picker: { height: 50, width: 150, transform: [{ translateY: "-50%" }] },
  header: {
    fontSize: 20,
    color: "rgba(0, 0, 0, 1)",
    alignSelf: "center",
    textShadowColor: "rgba(0,0,0, .2)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  confirmButton: {
    width: "60%",
    alignSelf: "center",
    backgroundColor: "rgba(0, 0, 0, .8)",
    marginBottom: "3%",
    flex: 1,
  },
  confirmText: {
    color: "#fff",
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
    textShadowColor: "rgba(30,145,202, .2)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  cancelButton: {
    position: "absolute",
    width: "10%",
    height: "20%",
    top: "2%",
    right: "2%",
    backgroundColor: "transparent",
    justifyContent: "center",
  },
  icon: {
    fontSize: 30,
    color: "rgba(0, 0, 0, .6)",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
