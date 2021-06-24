import * as React from "react";
import { View, Text } from "react-native";
import { Container, Content, Button, Icon } from "native-base";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import MeetupTabs from "../component/MeetupTabs";
import CreateMeetup from "../component/CreateMeetup";
import { CardStyleInterpolators } from "@react-navigation/stack";

const MeetupStack = createStackNavigator();

function Add() {
  const navigation = useNavigation();
  return (
    <Button
      style={{
        backgroundColor: "transparent",
        marginRight: 20,
        marginBottom: 10,
      }}
      onPress={() => navigation.navigate("Create New Meetup")}
    >
      <Ionicons
        name="add-circle-outline"
        style={{ fontSize: 25, color: "rgba(255, 76, 76, .8)" }}
      />
    </Button>
  );
}
function Cancel() {
  const navigation = useNavigation();
  return (
    <Button
      style={{
        backgroundColor: "transparent",
        marginLeft: 20,
        marginBottom: 10,
      }}
      onPress={() => navigation.goBack()}
    >
      <Text style={{ fontSize: 16, color: "rgba(255, 76, 76, .8)" }}>
        Cancel
      </Text>
    </Button>
  );
}
export default function MeetupScreen() {
  return (
    <MeetupStack.Navigator
      screenOptions={{
        headerStatusBarHeight: 40,
        headerTitleContainerStyle: {
          marginBottom: 10,
        },
      }}
    >
      <MeetupStack.Screen
        name="Meetup"
        component={Meetup}
        options={{ headerRight: (props) => <Add {...props} /> }}
      />
      <MeetupStack.Screen
        name="Create New Meetup"
        component={CreateMeetup}
        options={{
          headerLeft: (props) => <Cancel {...props} />,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureEnabled: false,
        }}
      />
    </MeetupStack.Navigator>
  );
}

function Meetup() {
  return <MeetupTabs />;
}
