import * as React from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const homeTabOption = {
  tabBarLabel: "Home",
  tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons name="home" color={color} size={size} />
  ),
};

const courseTabOption = {
  tabBarLabel: "Course",
  tabBarIcon: ({ color, size }) => (
    <MaterialCommunityIcons name="snowboard" color={color} size={size} />
  ),
  tabBarBadge: 3,
};

const meetupTabOption = {
  tabBarLabel: "Meetup",
  tabBarIcon: ({ color, size }) => (
    <FontAwesome name="meetup" color={color} size={size} />
  ),
}

export { homeTabOption, courseTabOption, meetupTabOption };
