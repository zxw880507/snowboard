import React, { Component } from "react";
import {
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  CheckBox,
} from "native-base";

export default function Resort() {
  return (
    <ListItem thumbnail>
      <CheckBox style={{ marginRight: 20 }} />
      <Left>
        <Thumbnail square source={{uri: "https://2.bp.blogspot.com/-A02Bl7JvrJY/WdJzGPRtjvI/AAAAAAAAAUY/u2Z73alvbLsJb-pCXf14zcZnKAbIscn0QCLcBGAs/s1600/winsport_logo.jpg"}} />
      </Left>
      <Body>
        <Text>WinSport(COP)</Text>
        <Text note numberOfLines={1}>
          I like to take a fucking shit..
        </Text>
      </Body>
      <Right>
        <Button transparent>
          <Text style={{color: "rgba(255,114,107, 1)", fontWeight: "700"}}>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
}