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
import { ProductScreen } from "./screens/Product.screen";
import { CardScreen } from "./screens/Card.screen";
import { AnimatedC } from "./components/temp/Animation";
import { KeyboardAvoidingC } from "./components/AvoidKeyboardView";
//import { HomeScreen } from "./screens/Home.screen";
import { Nav } from "./navigation/Nav";
import  { SnapCarousel }  from "./components/SnapCarousel";
// import { ExpoFirebase } from './auth/Firebase';
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
        <ProductScreen/>
        {/* <KeyboardAvoidingC component={<TempScreen />} /> */}
        {/* <AnimatedC/> */}
        {/* <ExpoFirebase/> */}
        {/* <KeyboardAvoidingC component={<Nav />} /> */}
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
    //backgroundColor: "gray",
  },
});
