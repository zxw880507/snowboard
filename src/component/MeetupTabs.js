import React, { Component } from "react";
import {StyleSheet} from "react-native";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import MyMeetupTab from "./MyMeetupTab";
import AllMeetupTab from "./AllMeetupTab";

const renderTabBar = (props) => {
  props.tabStyle = Object.create(props.tabStyle);
  return <ScrollableTab {...props} />;
};

const styles = StyleSheet.create({
  activeText: {
    color: "rgba(255, 76, 76, .8)",
    fontWeight: "700",
    textShadowColor: "rgba(255, 76, 76, .2)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 3,
  },
  text: { color: "rgba(0, 0, 0, .5)", fontWeight: "700" },
  activeTab: { backgroundColor: "transparent" },
  tab: { backgroundColor: "transparent" },
});
export default function MeetupTabs() {
  return (
    <Container>
      <Tabs
        renderTabBar={renderTabBar}
        tabBarUnderlineStyle={{ backgroundColor: "rgba(255, 76, 76, .8)" }}
      >
        <Tab
          heading="My Meetup"
          activeTextStyle={styles.activeText}
          textStyle={styles.text}
          activeTabStyle={styles.activeTab}
          tabStyle={styles.tab}
        >
          <MyMeetupTab />
        </Tab>
        <Tab
          heading="Meetup List"
          activeTextStyle={styles.activeText}
          textStyle={styles.text}
          activeTabStyle={styles.activeTab}
          tabStyle={styles.tab}
        >
          <AllMeetupTab />
        </Tab>
      </Tabs>
    </Container>
  );
}
