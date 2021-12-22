import React from "react";
import { View, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { RootScreen } from "../screens/Root.screen";

import { SignUpScreen } from "../screens/Signup.screen";
import { Ionicons } from "@expo/vector-icons";
import { BottomStackNav } from "./BottomStackNav";
const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={"BottomStackNav"}>
      {/* <Stack.Screen name="BottomStackNav" component={BottomStackNav} options={({ navigation }) => ({ headerRight: ()=> BottomStackScreenOptions.headerRight(navigation) })} /> */}
      <Stack.Screen name="BottomStackNav" component={BottomStackNav} options={({ navigation }) => (BottomStackScreenOptions) } />
      <Stack.Screen name="SignUpStackNav" component={SignUpScreen} options={({ navigation }) => (MapsScreenOptions)} />
    </Stack.Navigator>
  );
};

const BottomStackScreenOptions = {
  headerTitle: '',
  headerShown: false,
  headerBackTitleVisible: false,
    headerRight: (navigation: any)=> <Ionicons name='notifications-outline' size={25} onPress={()=>{return navigation.navigate('SignUpStackNav') }} />
}

const MapsScreenOptions = {
  headerTitle: '',
  headerShown: false,
  headerBackTitleVisible: false,
  headerRight: (navigation: any)=> <Ionicons name='notifications' size={25} onPress={  ()=>{ /* return navigation.navigate('BottomStackNav')*/ }} />
}