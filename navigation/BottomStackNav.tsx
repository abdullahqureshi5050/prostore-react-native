import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { LoginScreen } from "../screens/Login.screen";
import { SignUpScreen } from "../screens/Signup.screen";
import { MoreScreen } from "../screens/More.screen";
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
         // tabBarActiveTintColor: colors.FOREST_GREEN,
          //headerShown: false,
          headerStyle: {
            height: 30, // Specify the height of your custom header
          },
          headerRight: ()=><Text>R</Text>,
          headerLeft: ()=><Text>L</Text>,
          //headerTitleStyle: {width: '100%', alignItems: 'flex-end', backgroundColor: 'red', fontSize: 20},
          //headerTitleAllowFontScaling: true,
          //headerRightContainerStyle: { maxWidth: 30, alignItems: 'flex-end' , backgroundColor: 'lightblue'},
          tabBarIcon: (props: any) => {
            return (
              <Ionicons
                name="home-outline"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="My Lists"
        component={SignUpScreen}
        options={{
        //  tabBarActiveTintColor: colors.FOREST_GREEN,
         // headerShown: true,
         headerStyle: {
          height: 30, // Specify the height of your custom header
        },
          tabBarIcon: (props: any) => {
            return (
              <FontAwesome5
                name="list-ul"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Sell"
        component={SignUpScreen}
        options={{
        //  tabBarActiveTintColor: colors.FOREST_GREEN,
        //  headerShown: true,
        headerStyle: {
          height: 30, // Specify the height of your custom header
        },  
        tabBarIcon: (props: any) => {
            return (
              <Entypo
                name="squared-plus"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Messages"
        component={LoginScreen}
        options={{
        //  headerShown: true,
        //  tabBarActiveTintColor: colors.FOREST_GREEN,
        headerStyle: {
          height: 30, // Specify the height of your custom header
        },  
        tabBarIcon: (props: any) => {
            return (
              <Feather
                name="message-square"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
       //   headerShown: true,
        //  tabBarActiveTintColor: colors.FOREST_GREEN,
        headerStyle: {
          height: 30, // Specify the height of your custom header
        },
          tabBarIcon: (props: any) => {
            return (
              <Feather
                name="more-horizontal"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
