import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Icon,
  Accordion,
  Text,
  View,
} from "native-base";
import MyCourseList from "../component/MyCourseList";
import MeetupList from "../component/MeetupList";
const dataArray = [
  { title: "My Courses", content: <MyCourseList /> },
  { title: "My Meetup", content: <MeetupList /> },
];

export default class AccordionCustomHeaderContent extends Component {
  _renderHeader(item, expanded) {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(255, 59, 48, 0.75)",
          borderRadius: 5
        }}
      >
        <Text style={{ fontWeight: "600", color: "#ffffff" }}> {item.title}</Text>
        {expanded ? (
          <Icon style={{ fontSize: 18, color: "#ffffff" }} name="remove-circle" />
        ) : (
          <Icon style={{ fontSize: 18, color: "#ffffff" }} name="add-circle" />
        )}
      </View>
    );
  }
  _renderContent(item) {
    return item.content;
  }
  render() {
    return (
      <Container>
        
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={[]}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        
      </Container>
    );
  }
}
