import { StatusBar } from "expo-status-bar";
import React, {useEffect, useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './src/component/Tabs';
import Login from "./src/Screen/LoginScreen";
import axios from "axios";


export default function App() {
  const [token, settoken] = useState(undefined);
  useEffect(() => {
    axios.get("/api/data")
    .then(res => console.log(res.data))
  }, [])
  return !token ? <Login /> : (<NavigationContainer>
    <Tabs />
</NavigationContainer>)
}


