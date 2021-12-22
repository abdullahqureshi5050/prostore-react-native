import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
  KeyboardAvoidingView,
} from "react-native";
import { LoginScreen } from "./screens/Login.screen";
import { colors } from "./components/Color";
//import { SignUpScreen } from "./screens/Signup.screen";
import { TempScreen } from "./screens/Temp.screen";
import { CardScreen } from "./screens/Card.screen";
import { KeyboardAvoidingC } from "./components/AvoidKeyboardView";
//import { HomeScreen } from "./screens/Home.screen";
import { Nav } from "./navigation/Nav";

export default function App() {

  return (
    <SafeAreaView style={styles.rootSafeArea}>
      <View style={styles.rootViewContainer}>
        <StatusBar
          backgroundColor={colors.FOREST_GREEN}
          style="dark"
          translucent={false}
        />
        {/* <CardScreen /> */}
        {/* <TempScreen/> */}
        {/* <KeyboardAvoidingC component={<TempScreen />} /> */}
        <KeyboardAvoidingC component={<Nav />} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootSafeArea: {
    flex: 1,
    //backgroundColor: 'yellow'
  },

  rootViewContainer: {
    flex: 1,
    //height: '100%',
    //backgroundColor: "lightgray",
  },
});
