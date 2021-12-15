import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInputC } from "../components/TextInput";
import { ButtonC } from "../components/Button";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Feather,
  } from "@expo/vector-icons";
import { colors } from "../components/Color";  
export const Login = () => {
  return (
    <View style={styles.root}>
         <TextInputC
          placeholder="Username"
          icon={
            <MaterialCommunityIcons
              name="account"
              size={24}
              color={colors.FOREST_GREEN}
            />
          }
        />
        <TextInputC
          placeholder="Password"
          icon={<Feather name="lock" size={24} color={colors.FOREST_GREEN} />}
        />
         <ButtonC title={'Login'} />
    </View>
  );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});
