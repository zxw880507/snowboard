import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
export default class MyCourseList extends Component {
  render() {
    return (
          <Card >
            <CardItem header>
              <Text>Intermediate Riding</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Sunshine Village, Alberta
                </Text>
                <Text>
                  2021-05-22
                </Text>
                <Text>
                  Duration: 90 min
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>Instructor: Jack Zhao</Text>
            </CardItem>
         </Card>     
    );
  }
}