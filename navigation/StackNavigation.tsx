import React from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { RootScreen } from "../screens/Root.screen";

import { SignUpScreen } from "../screens/Signup.screen";
import { NotificationScreen } from "../screens/Notification.screen";
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
        headerShown: true,
        header: (props: any) => {
          return (
            <View
              style={{
                paddingHorizontal: 10,
                height: 40,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.FOREST_GREEN,
                //backgroundColor: "red",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <MaterialCommunityIcons
                    name="map-marker-outline"
                    size={20}
                    color={colors.FOREST_GREEN}
                    onPress={() => {
                      try {
                        props.navigation.navigate({
                          //name = "component" in stack navaigation, not screen prop "name" property.
                          name: "Map Search",
                        });
                      } catch (error: any) {
                        Alert.alert("Alert!", error);
                      }
                    }}
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    justifyContent: "center",
                    //backgroundColor: 'purple',
                    display: "flex",
                    width: "84%",
                  }}
                >
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.FOREST_GREEN,
                      fontSize: FONTSIZE?.SM,
                    }}
                  >
                    {props.title ? props.title : "Arfa Tower, Lahore."}{" "}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  justifyContent: "center",
                  //backgroundColor: 'pink',
                  //alignSelf:'center',
                }}
              >
                <MaterialCommunityIcons
                  name="bell-outline"
                  size={24}
                  color={colors.FOREST_GREEN}
                />
              </View>
            </View>
          );
        },
        title: "...some address",
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
        headerLeft: (props) => {
          return (
            // props.labelVisible &&
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={24}
              color={props.tintColor || colors.FOREST_GREEN}
            />
          );
          // return <MaterialCommunityIcons name="keyboard-backspace" size={24} color={props.tintColor || colors.FOREST_GREEN} />
        },
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
    </Stack.Navigator>
  );
};
const NotificationScreenOptions = {};

const BottomStackScreenOptions = {
  //headerLargeTitle: 'S',
  //headerLargeTitle: true,
  //headerTitleStyle: {fontSize: 20, fontWeight: 'bold'},
  //headerTitle: 'SIVISIC',
  headerShown: true,
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
