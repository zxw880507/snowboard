import React, { Component } from "react";
import {
  ListItem,
  Thumbnail,
  Text,
  Body,
  Button,
  CheckBox,
  View,
} from "native-base";
import Icon from "react-native-vector-icons/MaterialIcons";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Instructor(props) {
  const {index, name, description, selected, setInstructorSelected} = props;
  const check = () => {
    selected ? setInstructorSelected(undefined) : setInstructorSelected(index);
  }
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 1, y: 1 }}
        end={{ x: 0, y: 0 }}
        colors={["#9796f0", "#fbc7d4"]}
        style={styles.background}
      >
        <ListItem
          style={styles.listItem}
        >
          <CheckBox
            style={styles.checkBox}
            checked={selected}
            onPress={check}
          />
          <Thumbnail
            style={{ alignSelf: "center", marginLeft: 10 }}
            rounded
            source={require("../../assets/images/shit.jpg")}
          />
          <Body style={{ borderBottomWidth: "none", flex: 6 }}>
            <Text style={styles.name}>{name}</Text>
            <Text numberOfLines={1} style={styles.note}>
              {description}
            </Text>
          </Body>
          <Button
            transparent
            style={styles.button}
          >
            <Icon name="arrow-forward-ios" style={styles.icon} />
          </Button>
        </ListItem>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    paddingLeft: 0,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: "rgba(0,0,0,.5)",
  },
  background: {
    flex: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 0,
  },
  listItem: {
    flexDirection: "row",
    marginLeft: 0,
    marginRight: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  checkBox: { alignSelf: "center", marginLeft: 20, marginRight: 20 },
  name: {
    color: "rgba(255,255,255, 1)",
    textShadowColor: "rgba(0,0,0, .4)",
    // fontWeight: "600",
    fontFamily: "Verdana-Bold",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  note: {
    color: "rgba(255,255,255, 1)",
    fontSize: 12,
    textShadowColor: "rgba(0,0,0, .4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  button: { justifyContent: "center", alignSelf: "center", flex: 2 },
  icon: {
    color: "rgba(255,255,255, 1)",
    textShadowColor: "rgba(0,0,0, .4)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    alignSelf: "center",
  },
});
