import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

const LayoutSettings = () => {
  const deviceWidth = Dimensions.get("window").width;
  if (deviceWidth < 320) {
  } else if (deviceWidth < 380) {
  } else if (deviceWidth < 440) {
  } else if (deviceWidth < 500) {
  }
  // greater 500
  else {
  }
};

const styles = StyleSheet.create({});
