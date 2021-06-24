import * as React from "react";
import { View, Text } from "react-native";
import Switch from "./Switch";
import LevelDefine from "./LevelDefine";

export default function SelectLevelContent(props) {
  const { setScrollEnabled } = props;
  return (
    <View>
      <Switch setScrollEnabled={setScrollEnabled} />
      <LevelDefine />
    </View>
  );
}
