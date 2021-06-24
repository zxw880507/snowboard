import React, { Component } from "react";
import {
  List
} from "native-base";
import Resort from "./Resort";

export default class ResortList extends Component {
  render() {
    return (
        <List>
              <Resort />
        </List>
    );
  }
}
