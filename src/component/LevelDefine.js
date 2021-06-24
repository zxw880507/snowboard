import * as React from "react";
import { useState } from "react";
import { StyleSheet, ImageBackground } from "react-native";
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

const Tab1 = () => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.contentText}>Aiming at:</Text>
      <Text style={styles.contentText}>
        1. starting out learning how to control your speed and get some distance
        down a slope
      </Text>
      <Text style={styles.contentText}>
        2. Being comfortable on the snowboard, and be able to guiding yourself
        down the slope on the same edge as well as stoping yourself without
        falling, and trying to link turns
      </Text>
      <Text style={styles.contentText}>
        3. Being able to link turn in both directions (i.e. from your heel edge
        to your toe edge and your toe edge to your heel edge) on gentle slopes
      </Text>
      <Text style={styles.contentText}>
        3. Being able to control speed well and link turns in both directions
        (i.e. from your heel edge to your toe edge and your toe edge to your
        heel edge) on green (beginner) and intermediate (blue) slopes
      </Text>
    </View>
  );
};
const Tab2 = () => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.contentText}>Aiming at:</Text>
      <Text style={styles.contentText}>
        1. Being comfortable linking turns on any beginner or intermediate slope
        and do so at increasingly high speeds
      </Text>
      <Text style={styles.contentText}>
        2. Learning various types of turns (i.e. sliding turn, short turn or
        proper carves) to adapt terrain condition
      </Text>
      <Text style={styles.contentText}>
        3. Starting to explore off the groomer, navigating more unenven terrain
        including tree run
      </Text>
      <Text style={styles.contentText}>
        4. Being able to hit little natural jumps or small jumps with straight
        air (i.e. pop or oilie) and do some basic butter tricks (i.e. nose or
        tail press)
      </Text>
      <Text style={styles.contentText}>
        4. Learning how to ride switch referring to a beginner level
      </Text>
    </View>
  );
};
const Tab3 = () => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.contentText}>Aiming at:</Text>
      <Text style={styles.contentText}>
        1. Having the ability to perform sliding and carved turns on green, blue
        and some black runs
      </Text>
      <Text style={styles.contentText}>
        2. Being comfortable riding at moderate speeds, and riding consistently
        at more advanced freeride terrain, including steeps, bumps, trees, and
        variable snow conditions
      </Text>
      <Text style={styles.contentText}>
        3. Being confident to perform 180s or even more rotations on gentle
        slopes or side banks, and do some intermediate butter tricks (i.e.
        nose/tail press with rotation or counter-rotation)
      </Text>
      <Text style={styles.contentText}>
        4. Carrying bags of basic tricks to the slopes and perform confidently
        as all-mountain freestyle riders
      </Text>
    </View>
  );
};

const Tab4 = () => {
  return (
    <View style={styles.tabContainer}>
      <Text style={styles.contentText}>Aiming at:</Text>
      <Text style={styles.contentText}>
        1. Being comfortably to hit small or medium jumps on straight air with
        grabs (i.e. 6 basic grabs including Indy, Mute, Melon, Stalefish, Nose
        and Tail grabs)
      </Text>
      <Text style={styles.contentText}>
        2. Being able to do shifty in the air (i.e. Frontside and Backside
        shifty)
      </Text>
      <Text style={styles.contentText}>
        3. Becoming confident to perform 180s or 360s on small or medium jumps,
        and pop off 180s with riding switch
      </Text>
      <Text style={styles.contentText}>
        4. Venturing 50-50 on small jibbing features (i.e boxes or rails) with
        variations (i.e. Frontside/Backside Boardslide or Bluntslide/Boardslide
        to fakie)
      </Text>
    </View>
  );
};
export default function LevelDefine() {
  const tabArr = [
    {
      heading: "BEGINNER",
      tabContent: <Tab1 />,
    },
    {
      heading: "INTERMEDIATE",
      tabContent: <Tab2 />,
    },
    {
      heading: "ADVANCED",
      tabContent: <Tab3 />,
    },
    {
      heading: "FREESTYLE",
      tabContent: <Tab4 />,
    },
  ];
  return (
    <View>
      {/* <ImageBackground
        source={require("../../assets/images/level_profile.png")}
        style={{
          width: "100%",
          height: 80,
          justifyContent: "center",
          opacity: 0.8,
        }}
      /> */}
      <Tabs
        tabBarUnderlineStyle={{ backgroundColor: "rgba(255, 76, 76, .8)" }}
        tabContainerStyle={{ backgroundColor: "transparent" }}
      >
        {tabArr.map((tab) => (
          <Tab
            tabStyle={{ backgroundColor: "transparent" }}
            heading={tab.heading}
            textStyle={{ fontSize: 10 }}
            activeTextStyle={{ fontSize: 12, color: "rgba(255, 76, 76, .8)" }}
            style={{backgroundColor: "transparent"}}
          >
            {tab.tabContent}
          </Tab>
        ))}
      </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    width: "95%",
    alignSelf: "center",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0, .3)",
  },
  contentText: {
    textAlign: "justify",
    margin: 10,
    color: "rgba(0,0,0, .8)",
    flex: 1,
  },
  header: { alignSelf: "center" },
});
