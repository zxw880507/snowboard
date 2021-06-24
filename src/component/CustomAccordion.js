import * as React from "react";

import {
  Text,
  ImageBackground,
} from "react-native";
import {  Accordion } from "native-base";

import SelectLevelContent from "./SelectLevelContent";




export default function CustomAccordion(props) {
  const {setScrollEnabled} = props;

  const sections = [
    {
      title: "SELECT LEVEL",
      image: require("../../assets/images/level.png"),
      content: <SelectLevelContent setScrollEnabled={setScrollEnabled} />,
    },
    {
      title: "SELECT INSTRUCTOR",
      image: require("../../assets/images/instructor.png"),
      content: <SelectLevelContent setScrollEnabled={setScrollEnabled} />
    },
  ];
  const renderHeader = (item) => {
    return (
        <ImageBackground
         
          source={item.image}
          style={{
            width: "100%",
            height: 250,
            justifyContent: "center",
            opacity: 0.8,
          }}
        >
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              color: "rgba(255,255,255,1)",
              fontWeight: "600",
              fontSize: 50,
              textShadowColor: "rgba(0,0,0,.6)",
              textShadowOffset: { width: 2, height: -2 },
              textShadowRadius: 5,
            }}
          >
            {item.title}
          </Text>
        </ImageBackground>
    );
  };

  const renderContent = (item) => {
    return item.content;
  };



  return (
    <Accordion
    dataArray={sections}
    animation={true}
    expanded={[]}
    renderHeader={renderHeader}
    renderContent={renderContent}
  />
  );
}
