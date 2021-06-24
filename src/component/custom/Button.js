/* Switch Button Component class
 */
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const getIcon = (type, active) => {
  let icn;
  switch (type) {
    case "Beginner":
      icn = active
        ? require("./assets/slider/active/beginner.png")
        : require("./assets/slider/inactive/beginner.png");
      break;
    case "Intermediate":
      icn = active
        ? require("./assets/slider/active/intermediate.png")
        : require("./assets/slider/inactive/intermediate.png");
      break;
    case "Advanced":
      icn = active
        ? require("./assets/slider/active/advanced.png")
        : require("./assets/slider/inactive/advanced.png");
      break;
    case "Freestyle":
      icn = active
        ? require("./assets/slider/active/freestyle.png")
        : require("./assets/slider/inactive/freestyle.png");
      break;
  }
  return icn;
};

const Button = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
        <Image source={getIcon(props.type, props.active)} />
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  active: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  active: false,
};

export default Button;
