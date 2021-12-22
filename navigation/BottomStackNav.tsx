import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LoginScreen } from "../screens/Login.screen";
import { SignUpScreen } from "../screens/Signup.screen";
import { HomeScreen } from "../screens/Home.screen";
//import AppScreen from "../screens/App.screen";
import { Ionicons, Entypo, Feather, FontAwesome5 } from "@expo/vector-icons";
import { colors } from "../components/Color";

//const Tab = createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();

export const BottomStackNav = function () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          //headerTintColor: colors.FOREST_GREEN,
          tabBarActiveTintColor: colors.FOREST_GREEN,
          /*headerShown: false,*/ tabBarIcon: (props) => {
            return (
              <Ionicons
                name="home-outline"
                size={props.size || 24}
                color={colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="My Lists"
        component={SignUpScreen}
        options={{
          tabBarActiveTintColor: colors.FOREST_GREEN,
          headerShown: true,
          tabBarIcon: (props) => {
            return (
              <FontAwesome5
                name="list-ul"
                size={props.size || 24}
                color={colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sell"
        component={SignUpScreen}
        options={{
          tabBarActiveTintColor: colors.FOREST_GREEN,
          headerShown: true,
          tabBarIcon: (props) => {
            return (
              <Entypo
                name="squared-plus"
                size={props.size || 24}
                color={colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={LoginScreen}
        options={{
          headerShown: true,
          tabBarActiveTintColor: colors.FOREST_GREEN,
          tabBarIcon: (props) => {
            return (
              <Feather
                name="message-square"
                size={props.size || 24}
                color={colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={SignUpScreen}
        options={{
          headerShown: true,
          tabBarActiveTintColor: colors.FOREST_GREEN,
          tabBarIcon: (props) => {
            return (
              <Feather
                name="more-horizontal"
                size={props.size || 24}
                color={colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
