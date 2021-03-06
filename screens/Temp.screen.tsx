import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";

export const TempScreen = ({component}: any) => {
  return (
    <Shadow>
      <View>{component && component}</View>

      {/* <Text style={{ margin: 20, fontSize: 20 }}></Text> */}
    </Shadow>
  );
};

const styles = StyleSheet.create({});
