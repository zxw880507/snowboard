import * as React from "react";
import { useState } from "react";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Text,
  View,
  Title,
} from "native-base";

import MultiSwitch from "./custom/MultiSwitch";

export default function Switch(props) {
  const { setScrollEnabled } = props;
  const [status, setStatus] = useState("Beginner");
  const levelColor = (status) => {
    const color = {
      textColor: null,
      shadowColor: null,
    };
    switch (status) {
      case "Beginner":
        color.textColor = "rgba(25, 181, 74 ,1)";
        color.shadowColor = "rgba(25, 181, 74 ,.5)";
        return color;
      case "Intermediate":
        color.textColor = "rgba(15, 117, 188 ,1)";
        color.shadowColor = "rgba(15, 117, 188 ,.5)";
        return color;
      case "Advanced":
        color.textColor = "rgba(0,0,0 ,1)";
        color.shadowColor = "rgba(0,0,0 ,.5)";
        return color;
      case "Freestyle":
        color.textColor = "rgba(242, 101, 34 ,1)";
        color.shadowColor = "rgba(242, 101, 34 ,.5)";
        return color;
    }
  };
  return (
    <View style={{ marginTop: 10 }}>
      <MultiSwitch
        currentStatus={status}
        disableScroll={(value) => {
          console.log("scrollEnabled", value);
          // this.scrollView.setNativeProps({
          //     scrollEnabled: value
          // });
          setScrollEnabled(value);
        }}
        isParentScrollEnabled={false}
        onStatusChanged={(status) => {
          setStatus(status);
          console.log("Change Status ", status);
        }}
        disableSwitch={false}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
        }}
      >
        <Text
          style={{
            color: "rgba(0,0,0, .8)",
            fontFamily: 'ChalkboardSE-Bold',
          }}
        >
          Level selected:
        </Text>
        <Text
          style={{
            marginLeft: 10,
            color: levelColor(status).textColor,
            textShadowColor: "rgba(255,255,255, 1)",
            fontFamily: 'Chalkduster',
            textShadowOffset: { width: 1, height: -1 },
            textShadowRadius: 1,
          }}
        >
          {status}
        </Text>
      </View>
    </View>
  );
}
