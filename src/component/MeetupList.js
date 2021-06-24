import React, { Component } from "react";
import { Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  Container,
  Header,
  Content,
  Badge,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View,
} from "native-base";

const infoStyle = { flexDirection: "row", alignItems: "center", margin: 10 };
const iconStyle = { fontSize: 20, color: "rgba(255,114,107, 1)" };
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://s7305.pcdn.co/wp-content/uploads/2014/11/sunshine-village-logo.jpg",
              }}
            />
            <Body>
              <Text>Sunshine Village</Text>
              <Text note>April 15, 2021</Text>
            </Body>
          </Left>
          <Right>
          <Button danger style={{width: 30, height: 30, borderRadius: 15, justifyContent: "center"}}>
            <MaterialCommunityIcons name='trash-can-outline' style={{fontSize: 20, color: "#ffffff", alignSelf: "center"}}/>
          </Button>
          </Right>
        </CardItem>
        <CardItem>
          <Body>
            <View style={infoStyle}>
              <MaterialCommunityIcons name="cards-diamond" style={iconStyle} />
              <Text style={{ marginLeft: 5 }}>All-Mountain Freeride</Text>
            </View>
            <View style={infoStyle}>
              <Ionicons name="ios-location" style={iconStyle} />
              <Text style={{ marginLeft: 5 }}>Parking Lot</Text>
            </View>
            <View style={infoStyle}>
              <Ionicons name="ios-time" style={iconStyle} />
              <Text style={{ marginLeft: 5 }}>8:00AM</Text>
            </View>
          </Body>
        </CardItem>
        <CardItem>
          <Left style={{ marginLeft: 30 }}>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <MaterialCommunityIcons name="car" style={iconStyle} />
              <Text style={{ color: "#3dcc12", fontWeight: "700" }}>
                15 Going
              </Text>
            </Button>
          </Left>
          <Right style={{ marginRight: 30 }}>
            <Button transparent textStyle={{ color: "#87838B" }}>
              <MaterialIcons name="pending-actions" style={iconStyle} />
              <Text style={{ color: "#868686", fontWeight: "700" }}>
                15 Maybe
              </Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    );
  }
}
