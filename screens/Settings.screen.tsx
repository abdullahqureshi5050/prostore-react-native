import React, { useRef, useState, useContext } from "react";
import { StyleSheet, View, ScrollView, Text, Alert } from "react-native";

import {
  getComponentLayoutFunc,
  onScrollHandlerFunc,
} from "../components/ComponentLayoutandScrollHandler";
import { Divider } from "../components/Divider";
export const SettingsScreen = ({ navigation }: any) => {

  const [headingHeightState, setHeadingHeightState] = useState(0);
  const [TextHeightState, setTextHeightState] = useState(0);
  const [settingsScreenShownState, setsettingsScreenShownState] = useState(false);
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
    // console.log(
    //   // `Scroll ptr = ${e.nativeEvent.contentOffset.y} Heading H_ptr ${headingHeightState} Text H_ptr ${TextHeightState}`
    //   `Scroll ptr = ${res.contentOffset_Y} H_ptr ${
    //     TextHeightState + headingHeightState
    //   }`
    // );

    if (!res.error && (res.contentOffset_Y || res.contentOffset_Y==0)) {
      // if content scrolling on Y-axis is >= component height from top of the screen
      if (res.contentOffset_Y >= TextHeightState) {
        setsettingsScreenShownState(true);
        navigation.setOptions({ headerTitle : "Settings" })
        // Alert.alert("Alert", ">= case");
      } else {
       // Alert.alert("Alert", "< case");
        setsettingsScreenShownState(false)
        navigation.setOptions({headerTitle : '' })
      }
    } else if(res.error) 
      console.log('err', res.error);
  };
  return (
    <ScrollView onScroll={onScrollHandler} style={styles.root}>
      <View>
        <Text
          style={{ fontSize: 20, backgroundColor: "lightblue" }}
          onLayout={(e) => {
            const layout = getComponentLayoutFunc(e);
            if (layout.error) {
              console.log("error", layout.error);
            }
            layout.componentHeight
              ? setTextHeightState(layout.componentHeight + 50)
              : 0;
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
