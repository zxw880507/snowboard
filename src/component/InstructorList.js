import React, { useState } from "react";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from "native-base";

import Instructor from "./Instructor";
import { View } from "react-native";
const instructorsList = [
  { name: "Jack Zhao", description: "I like shitting" },
  { name: "Tiger Song", description: "I am fucking useless"},
  { name: "Shit Zhao", description: "Fire up"},
];
export default function InstructorList() {
  const [instructorSelected, setInstructorSelected] = useState(undefined);
 
  return (
    <List style={{ backgroundColor: "rgba(0,0,0, .1)", paddingBottom: 10 }}>
      {instructorsList.map((instructor, index) => (
        <Instructor
          key={index}
          index={index}
          name={instructor.name}
          description={instructor.description}
          setInstructorSelected={setInstructorSelected}
          selected={index === instructorSelected}
        />
      ))}
    </List>
  );
}
