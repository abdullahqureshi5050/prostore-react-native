import React, { useState } from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { LoginScreen } from "../screens/Login.screen";
import { SignUpScreen } from "../screens/Signup.screen";
import { SettingsScreen } from "../screens/Settings.screen";
import { HomeScreen } from "../screens/Home.screen";
//import AppScreen from "../screens/App.screen";
import {
  Ionicons,
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "../components/Color";

//const Tab = createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();

export const BottomStackNav = function () {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.FOREST_GREEN,
        tabBarActiveTintColor: colors.BLACK,
        headerRight: (props)=>{
          return <MaterialCommunityIcons name="bell-outline" size={24} color="black" />
        },

        headerLeft: (props)=>{
          return <MaterialCommunityIcons name="keyboard-backspace" size={24} color="black" />
        }  

      }}
    >
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
          //headerTitleStyle: {width: '100%', alignItems: 'flex-end', backgroundColor: 'red', fontSize: 20},
          //headerTitleAllowFontScaling: true,
          //headerRightContainerStyle: { maxWidth: 30, alignItems: 'flex-end' , backgroundColor: 'lightblue'},
          tabBarIcon: (props: any) => {
            return props.focused ? (
              <MaterialCommunityIcons
                name="home"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            ) : (
              <MaterialCommunityIcons
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
            return props.focused ? (
              <MaterialCommunityIcons
                name="format-list-bulleted-square"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            ) : (
              <MaterialCommunityIcons
                name="format-list-checkbox"
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
          //tabBarShowLabel: false,
          // tabBarShowLabel: false,
          //title: undefined,
          // tabBarLabel: (props) => {
          //   //position='beside-icon';
          //   //focused= false;
          //   //props.color='white';
          // },
          tabBarIconStyle: {
            backgroundColor: "blue",
          },
          //hide tabBarLabel
          tabBarLabelStyle: {
            //with-height set to zero to hide label
            width: 0,
            height: 0,
          },
          tabBarIcon: (props: any) => {
            return  props.focused ? (
              <View
                style={{
                  // width: 30,
                  // height: 30,
                  // justifyContent: 'center',
                  // alignContent: 'center',
                  // alignSelf: 'center',
                  borderWidth: 0.5,
                  borderRadius: 2,
                  //opacity: 0.2,
                  //borderWidth: "rgba(255, 0, 0, .5)",
                  borderColor: colors.BLACK,
                  backgroundColor: "white",
                  elevation: 12,
                  //shadowOpacity: 1,
                  shadowColor: colors.BLACK,
                  alignItems: "baseline",
                }}
              >
                <MaterialCommunityIcons
                  //name="plus"
                  name="plus"
                  size={props.size || 24}
                  color={props.color || colors.FOREST_GREEN}
                />
              </View>
            ): (
              <View
                style={{
                  // width: 30,
                  // height: 30,
                  // justifyContent: 'center',
                  // alignContent: 'center',
                  // alignSelf: 'center',
                  borderRadius: 5,
                  borderWidth: 1,
                  //opacity: 0.2,
                  //borderWidth: "rgba(255, 0, 0, .5)",
                  borderColor: colors.FOREST_GREEN,
                  backgroundColor: "white",
                  elevation: 10,
                  //shadowOpacity: 1,
                  shadowColor: "green",
                  alignItems: "baseline",
                }}
              >
                <MaterialCommunityIcons
                  //name="plus"
                  name="plus"
                  size={props.size || 24}
                  color={props.color || colors.FOREST_GREEN}
                />
              </View>
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
            return props.focused ? (
              <MaterialCommunityIcons
                name="message"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            ) : (
              <MaterialCommunityIcons
                name="message-outline"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        //children={<settingsScreen props={'so'} />}
        component={SettingsScreen}
        // options={({ route }) => ({
        //   title: route.params.name
        // })}
        options={({ route }) => ({
          headerTitle: "",
          // headerShown: (props: boolean) => <LogoTitle {...props} />,
          //  tabBarActiveTintColor: colors.FOREST_GREEN,
          //headerShown: (route.params) ? (route.params): false,
          headerStyle: {
            height: 30, // Specify the height of your custom header
          },
          tabBarIcon: (props: any) => {
            return props.focused ? (
              <MaterialCommunityIcons
                name="cog"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            ) : (
              <MaterialCommunityIcons
                name="cog-outline"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};
