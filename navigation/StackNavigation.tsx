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
  //headerLargeTitle: 'S',
  //headerLargeTitle: true,
  //headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
  //headerTitle: 'SIVISIC',
  headerShown: false,
  //headerStyle: {
    //height: 10,
    //backgroundColor: 'red'
  //},

  // headerStyle: {
  //   height: 30, // Specify the height of your custom header
  // },
  headerBackTitleVisible: false,
    headerRight: (navigation: any)=> <Ionicons name='notifications-outline' size={25} onPress={()=>{return navigation.navigate('SignUpStackNav') }} />
}

const MapsScreenOptions = {
  headerTitle: '',
  headerShown: false,
  headerBackTitleVisible: false,
  headerRight: (navigation: any)=> <Ionicons name='notifications' size={25} onPress={  ()=>{ /* return navigation.navigate('BottomStackNav')*/ }} />
}