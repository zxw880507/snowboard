import registerRootComponent from "expo/build/launch/registerRootComponent";
import { BASE_URL } from "@env";
import axios from "axios";
import App from "./App";
console.log(BASE_URL);
if (BASE_URL) {
  axios.defaults.baseURL = BASE_URL;
}

registerRootComponent(App);
