import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import TimePicker from "../component/TimePicker";

export default function TheThirdScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={require("../../assets/images/shit.jpg")}/>
      <TimePicker />
    </View>
  );
}


