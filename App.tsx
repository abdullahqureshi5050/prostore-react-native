import { StatusBar } from "expo-status-bar";
import React from "react";
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
import { Login } from "./screens/Login.screen";
import { colors } from "./components/Color";
import { SignUpScreen } from "./screens/Signup.screen";
import { KeyboardAvoidingC } from "./components/AvoidKeyboardView";
export default function App() {
  return (
    <SafeAreaView style={styles.rootSafeArea}>
      <View style={styles.rootViewContainer}>
        <StatusBar
          backgroundColor={colors.FOREST_GREEN}
          style="dark"
          translucent={false}
        />
        {/* <KeyboardAvoidingC component={<SignUpScreen />} /> */}
        <KeyboardAvoidingC component={<Login />} />
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
