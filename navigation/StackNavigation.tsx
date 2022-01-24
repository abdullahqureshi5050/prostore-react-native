import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { RootScreen } from "../screens/Root.screen";

import { SignUpScreen } from "../screens/Signup.screen";
import { NotificationScreen } from "../screens/Notification.screen";
import { SearchItemScreen } from "../screens/SearchItem.screen";
import { MapSearchScreen } from "../screens/MapSearch.screen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { BottomStackNav } from "./BottomStackNav";
import { colors } from "../components/Color";
import { FONTSIZE } from "../static/FontSize";

const Stack = createNativeStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={"BottomStackNav"}
      // screenOptions={{
      //   headerShown: true,
      //   //headerStyle: { backgroundColor: 'tomato' },
      // }}
      screenOptions={{
        headerShown: false,
        //header: ,
        title: "Home",
        headerRight: (props) => {
          return (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={colors.FOREST_GREEN}
              onPress={() => {
                // navigation.navigate({
                //   //name = "component" in stack navaigation, not screen prop "name" property.
                //   name: 'NotificationScreen', });
              }}
            />
          );
        },
        // headerLeft: (props) => {
        //   return (
        //     // props.labelVisible &&
        //     <MaterialCommunityIcons
        //       name="map-marker-outline"
        //       size={24}
        //       color={props.tintColor || colors.FOREST_GREEN}
        //     />
        //   );
        //   // return <MaterialCommunityIcons name="keyboard-backspace" size={24} color={props.tintColor || colors.FOREST_GREEN} />
        // },
        //headerStyle: ()=> {height: 60},
      }}
    >
      {/* <Stack.Screen name="BottomStackNav" component={BottomStackNav} options={({ navigation }) => ({ headerRight: ()=> BottomStackScreenOptions.headerRight(navigation) })} /> */}
      <Stack.Screen
        name="BottomStackNav"
        component={BottomStackNav}
        options={({ navigation }) => ({})}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={({ navigation }) => MapsScreenOptions}
      />
      <Stack.Screen
        name="Map Search"
        component={MapSearchScreen}
        options={({ navigation }) => ({})}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={({ navigation }) => NotificationScreenOptions}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchItemScreen}
        options={({ navigation }) => NotificationScreenOptions}
      />
    </Stack.Navigator>
  );
};
const NotificationScreenOptions = {};

const BottomStackScreenOptions = {
  //headerLargeTitle: 'S',
  //headerLargeTitle: true,
  //headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
  //headerTitle: 'SIVISIC',
  //headerShown: true,
  headerLeft: () => {
    return (
      <MaterialCommunityIcons
        name="map-marker-outline"
        size={24}
        color={colors.FOREST_GREEN}
      />
    );
  },
  //headerStyle: {
  //height: 10,
  //backgroundColor: 'red'
  //},
  // headerStyle: {
  //   height: 30, // Specify the height of your custom header
  // },

  headerBackTitleVisible: false,
  headerRight: (navigation: any) => (
    <Ionicons
      name="notifications-outline"
      size={25}
      onPress={() => {
        return navigation.navigate("SignUpStackNav");
      }}
    />
  ),
};

const MapsScreenOptions = {
  headerTitle: "",
  headerShown: false,
  headerBackTitleVisible: false,
  headerRight: (navigation: any) => (
    <Ionicons
      name="notifications"
      size={25}
      onPress={() => {
        /* return navigation.navigate('BottomStackNav')*/
      }}
    />
  ),
};
