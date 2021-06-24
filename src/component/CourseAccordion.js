import React, { useState } from "react";
import { Container, Icon, Accordion, Text, View } from "native-base";
import CourseLevel from "../component/CourseLevel";
import InstructorList from "../component/InstructorList";
import ResortList from "../component/ResortList"
import DatePicker from "../component/DatePicker";
import TimePicker from "../component/TimePicker";



export default function CourseAccordion() {
  const [showTimePicker, setShowTimePicker] = useState(false);
  const dataArray = [
    { title: "Select A Course Type", content: <CourseLevel /> },
    { title: "Select An Instructor", content: <InstructorList /> },
    { title: "Select A Resort", content: <ResortList /> },
    { title: "Select A Date & Time", content: <DatePicker setShowTimePicker={setShowTimePicker}/> }
  ];
  const _renderHeader = (item, expanded) => {
    return (
      <View style={{
        flexDirection: "row",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center" ,
        backgroundColor: "#A9DAD6" }}>
      <Text style={{ fontWeight: "600" }}>
          {" "}{item.title}
        </Text>
        {expanded
          ? <Icon style={{ fontSize: 18 }} name="remove-circle" />
          : <Icon style={{ fontSize: 18 }} name="add-circle" />}
      </View>
    );
  }
  const _renderContent = (item) => {
    return (
      item.content
      );
    }
    
    return (
      <Container>
          <Accordion
            dataArray={dataArray}
            animation={true}
            expanded={[0]}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
          />
        {showTimePicker && <TimePicker setShowTimePicker={setShowTimePicker}/>}
      </Container>
    );
  
}
<br/>