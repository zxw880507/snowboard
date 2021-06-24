import React, { Component } from "react";
import {
  Animated,
  Dimensions,
  PanResponder,
  View,
  Platform,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "./Button";
import styles from "./styles";
// const { width } = Dimensions.get("window");
const width = 360;
import PropTypes from "prop-types";

export default class MultiSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: props.currentStatus,
      isComponentReady: false,
      position: new Animated.Value(0),
      posValue: 0,
      selectedPosition: 0,
      duration: 100,
      mainWidth: width,
      switcherWidth: width / 4,
      thresholdDistance: width - width / 4,
    };
    this.isParentScrollDisabled = false;
  }

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // disable parent scroll if slider is inside a scrollview
        if (!this.isParentScrollDisabled) {
          this.props.disableScroll(false);
          this.isParentScrollDisabled = true;
        }
      },

      onPanResponderMove: (evt, gestureState) => {
        if (!this.props.disableSwitch) {
          let finalValue = gestureState.dx + this.state.posValue;
          if (finalValue >= 0 && finalValue <= this.state.thresholdDistance) {
            this.state.position.setValue(this.state.posValue + gestureState.dx);
          } else if (finalValue < 0) {
            finalValue = 0;
            this.state.position.setValue(0);
          } else {
            finalValue = this.state.thresholdDistance;
            this.state.position.setValue(this.state.thresholdDistance);
          }
        }
      },

      onPanResponderTerminationRequest: () => true,

      onPanResponderRelease: (evt, gestureState) => {
        if (!this.props.disableSwitch) {
          let finalValue = gestureState.dx + this.state.posValue;
          this.isParentScrollDisabled = false;
          this.props.disableScroll(true);
          if (gestureState.dx > 0) {
            if (finalValue >= 0 && finalValue <= width / 12) {
              this.beginnerSelected();
            } else if (finalValue >= width / 12 && finalValue <= width / 3) {
              this.intermediateSelected();
            } else if (
              finalValue >= width / 3 &&
              finalValue <= (7 * width) / 12
            ) {
              this.advancedSelected();
            } else if (finalValue > (7 * width) / 12) {
              if (gestureState.dx > 0) {
                this.freestyleSelected();
              } else {
                this.advancedSelected();
              }
            }
          } else {
            if (finalValue >= (2 * width) / 3) {
              this.freestyleSelected();
            } else if (
              finalValue >= (width * 5) / 12 &&
              finalValue <= (2 * width) / 3
            ) {
              this.advancedSelected();
            } else if (
              finalValue >= (width * 1) / 6 &&
              finalValue <= (width * 5) / 12
            ) {
              this.intermediateSelected();
            } else {
              this.beginnerSelected();
            }
          }
        }
      },

      onPanResponderTerminate: () => {},
      onShouldBlockNativeResponder: () => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      },
    });
    this.moveInitialState();
  }

  beginnerSelected = () => {
    if (this.props.disableSwitch) return;
    Animated.timing(this.state.position, {
      toValue: 0,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.setState({
        posValue: 0,
        selectedPosition: 0,
      });
    }, 100);
    this.props.onStatusChanged("Beginner");
  };

  intermediateSelected = () => {
    if (this.props.disableSwitch) return;
    Animated.timing(this.state.position, {
      toValue: this.state.mainWidth / 2 - this.state.switcherWidth,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.setState({
        posValue: this.state.mainWidth / 2 - this.state.switcherWidth,
        selectedPosition: 1,
      });
    }, 100);
    this.props.onStatusChanged("Intermediate");
  };

  advancedSelected = () => {
    if (this.props.disableSwitch) return;
    Animated.timing(this.state.position, {
      toValue: this.state.mainWidth - this.state.switcherWidth * 2,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.setState({
        posValue: this.state.mainWidth - this.state.switcherWidth * 2,
        selectedPosition: 2,
      });
    }, 100);
    this.props.onStatusChanged("Advanced");
  };

  freestyleSelected = () => {
    if (this.props.disableSwitch) return;
    Animated.timing(this.state.position, {
      toValue: this.state.mainWidth - this.state.switcherWidth,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      this.setState({
        posValue: this.state.mainWidth - this.state.switcherWidth,
        selectedPosition: 3,
      });
    }, 100);
    this.props.onStatusChanged("Freestyle");
  };

  getStatus = () => {
    switch (this.state.selectedPosition) {
      case 0:
        return "Beginner";
      case 1:
        return "Intermediate";
      case 2:
        return "Advanced";
      case 3:
        return "Freestyle";
    }
  };

  moveInitialState = () => {
    switch (this.state.currentStatus) {
      case "Beginner":
        this.beginnerSelected();
        break;
      case "Intermediate":
        this.intermediateSelected();
        break;
      case "Advanced":
        this.advancedSelected();
        break;
      case "Freestyle":
        this.freestyleSelected();
        break;
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          // Background Linear Gradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["rgba(255,255,255, .1)", "rgba(0,0,0, .1)", "transparent"]}
          style={styles.background}
        >
          <Button type="Beginner" onPress={this.beginnerSelected} />
          <Button type="Intermediate" onPress={this.intermediateSelected} />
          <Button type="Advanced" onPress={this.advancedSelected} />
          <Button type="Freestyle" onPress={this.freestyleSelected} />
          <Animated.View
            // {...this._panResponder.panHandlers}
            style={[
              styles.switcher,
              {
                transform: [{ translateX: this.state.position }],
              },
            ]}
          >
            <Button type={this.getStatus()} active={true}></Button>
          </Animated.View>
        </LinearGradient>
      </View>
    );
  }
}

MultiSwitch.propTypes = {
  disableScroll: PropTypes.func,
  onStatusChanged: PropTypes.func,
};

MultiSwitch.defaultProps = {
  disableSwitch: true,
};
