import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, Text, Alert } from "react-native";
import { Divider } from "../components/Divider";
export const MoreScreen = (props: any) => {
  const [headingHeightState, setHeadingHeightState] = useState(0);
  //const onScrollRef = useRef(()=>console.log(`it's scrolled from ref`)).current;
  const Fn = () => {
    return (
      <View style={styles.root}>
        <Divider color={"black"} />
      </View>
    );
  };
  const onScrollHandler = (e: any) => {
    console.log(
      `Scroll ptr = ${e.nativeEvent.contentOffset.y} Heading H_ptr ${headingHeightState}`
    );
  };
  return (
    <ScrollView onScroll={onScrollHandler}>
      <View
        style={styles.root}
        onLayout={(e) => {
          const { x, y, width, height } = e.nativeEvent.layout;
          setHeadingHeightState(height);
          Alert.alert('Alert', `height=${height} y= ${y} x=${y}`)
        }}
        // run onces on compunent did mount
      >
        <Text
          style={{fontSize: 20}}
        >
          Heading
        </Text>
      </View>
      {Array.from({ length: 10 }).map((_, index) => (
        <Fn key={index} />
      ))}
      {/* {Array(10).fill(<Fn />)} */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
      //marginTop: 10
    padding: 30,
  },
});
