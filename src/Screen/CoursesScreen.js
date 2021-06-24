import * as React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CourseAccordion from "../component/CourseAccordion";
const CourseStack = createStackNavigator();

export default function CoursesScreen() {
  return (
    <CourseStack.Navigator>
      <CourseStack.Screen name="Book A Course" component={Courses} />
    </CourseStack.Navigator>
  );
}

function Courses() {
  return <CourseAccordion />;
}
