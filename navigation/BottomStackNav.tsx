import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { LoginScreen } from "../screens/Login.screen";
import { SignUpScreen } from "../screens/Signup.screen";
import { AccountScreen } from "../screens/Account.screen";
import { HomeScreen } from "../screens/Home.screen";
//import AppScreen from "../screens/App.screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "../components/Color";

//const Tab = createMaterialBottomTabNavigator();

const Tab = createBottomTabNavigator();

export const BottomStackNav = function () {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarInactiveTintColor: colors.FOREST_GREEN,
        tabBarActiveTintColor: colors.BLACK,
        headerRight: (props) => {
          return (
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color={colors.FOREST_GREEN}
              onPress={() => {
                console.log("notification icon pressed");
              }}
            />
          );
        },

        // default undefined
        headerLeftLabelVisible: true,
        headerLeft: (props) => {
          return (
            props.labelVisible && (
              <MaterialCommunityIcons
                name="keyboard-backspace"
                size={24}
                color={props.tintColor || colors.FOREST_GREEN}
              />
            )
          );
          // return <MaterialCommunityIcons name="keyboard-backspace" size={24} color={props.tintColor || colors.FOREST_GREEN} />
        },

        //All header titles in Top Nav
        //headerTitle: '',
        headerTitleAlign: "center",
        headerStyle: {
          height: 40,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.FOREST_GREEN,
          //backgroundColor: 'red',
        },
        tabBarStyle: {
          paddingBottom: 5,
        },

        headerRightContainerStyle: {
          //flex: 0,
          paddingRight: 10,
        },

        headerLeftContainerStyle: {
          paddingLeft: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={({ route, navigation }) => ({
          
          headerRight: (props) => {
            return (
              <MaterialCommunityIcons
                name="bell-outline"
                size={24}
                color={colors.FOREST_GREEN}
                onPress={() => {
                  navigation.navigate({ 
                    //name = "component" in stack navaigation, not screen prop "name" property.
                    name: 'NotificationScreen', });
                }}
              />
            );
          },
          // headerTintColor: colors.FOREST_GREEN,
          // tabBarActiveTintColor: colors.FOREST_GREEN,
          headerShown: false,
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
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
        })}
      />
      <Tab.Screen
        name="My Lists"
        component={SignUpScreen}
        options={{
          //  tabBarActiveTintColor: colors.FOREST_GREEN,
          // headerShown: true,
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
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
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
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
            return props.focused ? (
              <View
                style={{
                  // width: 30,
                  // height: 30,
                  // justifyContent: 'center',
                  // alignContent: 'center',
                  // alignSelf: 'center',
                  borderWidth: 1,
                  borderRadius: 5,
                  //opacity: 0.2,
                  //borderWidth: "rgba(255, 0, 0, .5)",
                  borderColor: colors.BLACK,
                  backgroundColor: "white",
                  elevation: 5,
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
            ) : (
              <View
                style={{
                  // width: 30,
                  // height: 30,
                  // justifyContent: 'center',
                  // alignContent: 'center',
                  // alignSelf: 'center',
                  borderRadius: 5,
                  borderWidth: 0.5,
                  //opacity: 0.5,
                  //borderWidth: "rgba(255, 0, 0, .5)",
                  borderColor: colors.FOREST_GREEN,
                  backgroundColor: "white",
                  elevation: 5,
                  //shadowOpacity: 1,
                  shadowColor: colors.FOREST_GREEN,
                  alignItems: "baseline",
                }}
              >
                <MaterialCommunityIcons
                  //name="plus"
                  name="plus"
                  size={30}
                  color={props.color || colors.FOREST_GREEN}
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={LoginScreen}
        options={{
          //  headerShown: true,
          //  tabBarActiveTintColor: colors.FOREST_GREEN,
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
          tabBarIcon: (props: any) => {
            return props.focused ? (
              <MaterialCommunityIcons
                name="text-box-check"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            ) : (
              <MaterialCommunityIcons
                name="text-box-check-outline"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        //children={<AccountScreen props={'so'} />}
        component={AccountScreen}
        // options={({ route }) => ({
        //   title: route.params.name
        // })}
        options={({ route }) => ({
          headerTitle: "",
          // headerShown: (props: boolean) => <LogoTitle {...props} />,
          //  tabBarActiveTintColor: colors.FOREST_GREEN,
          //headerShown: (route.params) ? (route.params): false,
          // headerStyle: {
          //   height: 30, // Specify the height of your custom header
          // },
          tabBarIcon: (props: any) => {
            return props.focused ? (
              <MaterialCommunityIcons
                name="account"
                size={props.size || 24}
                color={props.color || colors.FOREST_GREEN}
              />
            ) : (
              <MaterialCommunityIcons
                name="account-outline"
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
