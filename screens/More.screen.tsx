import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View, ScrollView, Text, Alert } from "react-native";
import {
  getComponentLayoutFunc,
  onScrollHandlerFunc,
} from "../components/ComponentLayoutandScrollHandler";
import { Divider } from "../components/Divider";
export const MoreScreen = (props: any) => {
  
  const [headingHeightState, setHeadingHeightState] = useState(0);
  const [TextHeightState, setTextHeightState] = useState(0);
  //const onScrollRef = useRef(()=>console.log(`it's scrolled from ref`)).current;
  const Fn = () => {
    return (
      <View style={styles.root}>
        <Divider color={"black"} />
      </View>
    );
  };
  const onScrollHandler = (e: any) => {
    const res = onScrollHandlerFunc(e);
    console.log(
      // `Scroll ptr = ${e.nativeEvent.contentOffset.y} Heading H_ptr ${headingHeightState} Text H_ptr ${TextHeightState}`
      `Scroll ptr = ${res.contentOffset_Y} H_ptr ${
        TextHeightState + headingHeightState
      }`
    );
    if (!res.error && res.contentOffset_Y) {
      console.log("true 1");
      // if content scrolling on Y-axis is >= component height from top of the screen
      if (res.contentOffset_Y >= TextHeightState) {
        Alert.alert("Alert", ">= case");
      } else Alert.alert("Alert", "< case");
    } else console.log(res.error);
  };
  return (
    <ScrollView onScroll={onScrollHandler} style={styles.root}>
      <View
      //style={{}}
      // onLayout={(e) => {
      //   const {
      //     componentHeight,
      //     componentWidth,
      //     component_Height_With_CSS_Style_Offset,
      //     component_Width_With_CSS_Style_Offset,
      //   } = getComponentLayoutC(e);

      //   setHeadingHeightState(component_Height_With_CSS_Style_Offset);
      //   // Alert.alert("Alert", `height=${height} y= ${y} x=${x}`);
      // }}
      // run onces on compunent did mount
      >
        <Text
          style={{ fontSize: 20, backgroundColor: "lightblue" }}
          onLayout={(e) => {
            // const {
            //   componentHeight,
            //   componentWidth,
            //   component_Height_With_CSS_Style_Offset,
            //   component_Width_With_CSS_Style_Offset,
            //   error
            // } = getComponentLayoutFunc(e);
            const layout = getComponentLayoutFunc(e);
            if (layout.error) console.log("error", layout.error);
            layout.componentHeight
              ? setTextHeightState(layout.componentHeight + 50)
              : 0;
            // Alert.alert(
            //   "Text",
            //   `height=${height} y= ${y} ttl=${height + y} x=${x}`
            // );
          }}
        >
          Heading
        </Text>
      </View>
      <View>
        {Array.from({ length: 10 }).map((_, index) => (
          <Fn key={index} />
        ))}
        {/* {Array(10).fill(<Fn />)} */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    //marginTop: 40,
    paddingTop: 50,
    backgroundColor: "pink",
  },
});
