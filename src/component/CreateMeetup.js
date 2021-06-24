import * as React from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import CustomAccordion from "./CustomAccordion";


export default function CreateMeetup() {
  const [scrollEnabled, setScrollEnabled] = useState(true);
  
  return (
    <ScrollView style={{ flex: 1 }} scrollEnabled={scrollEnabled}>
      {/* <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={["transparent"]}
        style={{ flex: 1 }}
      > */}
        <CustomAccordion setScrollEnabled={setScrollEnabled}/>
      {/* </LinearGradient> */}
    </ScrollView>
  );
}
