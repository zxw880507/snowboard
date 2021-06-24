import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screen/HomeScreen";
import CoursesScreen from "../Screen/CoursesScreen";
import MeetupScreen from "../Screen/MeetupScreen";
import { homeTabOption, courseTabOption, meetupTabOption } from "../Styles/style";

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}
    >
      <Tab.Screen name="Home" 
      component={HomeScreen} 
      options={homeTabOption}
      />
      <Tab.Screen name="second Screen" 
      component={CoursesScreen} 
      options={courseTabOption}
      />
      <Tab.Screen name="third Screen" 
      component={MeetupScreen} 
      options={meetupTabOption}
      />
    </Tab.Navigator>
  );
}
