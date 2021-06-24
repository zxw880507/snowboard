import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import LoginScreen from "react-native-login-screen";
import axios from "axios";

export default function Login() {
  const [spinnerVisibility, setSpinnerVisibility] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <LoginScreen
      spinnerEnable
      spinnerVisibility={spinnerVisibility}
      labelTextStyle={{
        color: "#adadad",
        // fontFamily: "Now-Bold",
      }}
      logoTextStyle={{
        fontSize: 27,
        color: "#fdfdfd",
        // fontFamily: "Now-Black",
      }}
      loginButtonTextStyle={{
        color: "#fdfdfd",
        // fontFamily: "Now-Bold",
      }}
      textStyle={{
        color: "#757575",
        // fontFamily: "Now-Regular",
      }}
      signupStyle={{
        color: "#fdfdfd",
        // fontFamily: "Now-Bold",
      }}
      autoCapitalize="none"
      usernameTitle="Email"
      usernamePlaceholder="Email"
      usernameOnChangeText={(email) => setEmail(email)}
      onPressSettings={() => alert("Settings Button is pressed")}
      passwordOnChangeText={(password) => setPassword(password)}
      onPressLogin={() => {
        const params = {
          email,
          password
        };
        axios
          .post("/login", params)
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err.response.data));
        // setSpinnerVisibility(true);
        // setTimeout(() => {
        //   setSpinnerVisibility(false);
        // }, 2000);
      }}
      onPressSignup={() => {
        console.log("onPressSignUp is pressed");
      }}
    >
      <View
        style={{
          position: "relative",
          alignSelf: "center",
          marginTop: 64,
        }}
      >
        <Text style={{ color: "white", fontSize: 30 }}>
          Inside Login Screen Component
        </Text>
      </View>
    </LoginScreen>
  );
}
