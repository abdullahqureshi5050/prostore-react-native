import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { 
    View,
    StyleSheet,
    Text
 } from "react-native";
import { colors } from "../components/Color";
import { TextInputC } from "../components/TextInput";
import { FONTSIZE } from "../static/FontSize";

export const MapSearchScreen = ()=>{
    return (
        <View>
            <Text>Map Search Screen</Text>
            <TextInputC
        textInputContainerStyle={{
          marginTop: 10,
          height: 30,
          borderRadius: 5,
          borderColor: colors.FOREST_GREEN,
        }}
        textInputStyle={{
          marginVertical: 0,
          marginRight: 0,
          //margin: 0,
          padding: 0,
          color: colors.FOREST_GREEN,
          fontSize: FONTSIZE?.SM
        }}
        icon={
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={17}
            color={colors.FOREST_GREEN}
          />
        }
      ></TextInputC>
        </View>
    );
}

const styles = StyleSheet.create({

})