import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Dimensions, Alert } from "react-native";
import { Header } from "../navigation/Header";
import { colors } from "../components/Color";
import { StackActions } from "@react-navigation/native";

export const NotificationScreen = (props: any) => {
  return (
    <View>
      <Header
        {...props}
        title={"Notifications"}
        headerLeft={
          <MaterialCommunityIcons
            name="close-circle-outline"
            size={20}
            color={colors.FOREST_GREEN}
            onPress={() => {
              try {
                props.navigation.dispatch(StackActions.pop(1));
                // props.navigation.navigate({
                //   //name = "component" in stack navaigation, not screen prop "name" property.
                //   name: "Map Search",
                // });
              } catch (error: any) {
                Alert.alert("Alert!", error);
              }
            }}
          />
        }
        //headerRight={{} }
      />
      <View style={{}}>
        <Text style={{ color: colors.DARK_GRAY }}>Today</Text>
      </View>
      <View style={{}}>
        <Text style={{ color: colors.DARK_GRAY }}>Yesterday</Text>
      </View>
      <View style={{}}>
        <Text style={{ color: colors.DARK_GRAY }}>This Month</Text>
      </View>
      <View style={{}}>
        <Text style={{ color: colors.DARK_GRAY }}>All Previous</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
