import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Courses from "./CoursesScreen";
import Meetup from "./MeetupScreen";

import HomeAccordion from "../component/HomeAccordion";
import { Container, Content } from "native-base";

const HomeStack = createStackNavigator();

export default function HomeScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      {/* <HomeStack.Screen name="Courses" component={Courses} />
      <HomeStack.Screen name="Meetup" component={Meetup} /> */}
    </HomeStack.Navigator>
  );
}

function Home({ navigation }) {
  return (
      <HomeAccordion />
  );
}
