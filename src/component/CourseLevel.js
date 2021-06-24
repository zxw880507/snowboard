import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body, View } from 'native-base';



export default class CourseLevel extends Component {
  render() {
    return (
      <View>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Beginner Riding</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Intermediate Riding</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Advanced Riding</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Freestyle & Park</Text>
            </Body>
          </ListItem>
      
      </View>
    );
  }
}