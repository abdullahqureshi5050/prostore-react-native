import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet, Text, Dimensions, Alert } from "react-native";
import { Header } from "../navigation/Header";
import { colors } from "../components/Color";

export const NotificationScreen = (props: any)=>{
    return (
        <View>
               <Header {...props}
          title={"Notifications"}
          headerLeft={
            <MaterialCommunityIcons
              name="map-marker-outline"
              size={20}
              color={colors.FOREST_GREEN}
              // onPress={() => {
              //   try {
              //     props.navigation.navigate({
              //       //name = "component" in stack navaigation, not screen prop "name" property.
              //       name: "Map Search",
              //     });
              //   } catch (error: any) {
              //     Alert.alert("Alert!", error);
              //   }
              // }}
            />
          }
          //headerRight={{} }
        />
            <Text>Notification Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    
})