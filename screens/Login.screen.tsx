import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { TextInputC } from "../components/TextInput";
import { ButtonC } from "../components/Button";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { colors } from "../components/Color";

export const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <TextInputC
        textInputContainerStyle={{ marginVertical: 5 }}
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
        textInputContainerStyle={{ marginVertical: 5 }}
        placeholder="Password"
        icon={<Feather name="lock" size={24} color={colors.FOREST_GREEN} />}
      />
      <ButtonC
        textContainerStyle={{ backgroundColor: colors.BLACK }}
        title={"Login"}
      />

      <View style={styles.footerTextContainer}>
        <Text style={styles.footerText}>
          Don't have an account?
          {
            <Text
              style={{
                ...styles.footerText,
                color: colors.FOREST_GREEN,
                flex: 1,
              }}
              onPress={() => {
                try {
                  Alert.alert("Alert!", "Sign up call from Login screen");
                } catch (error: any) {
                  Alert.alert("Alert!", error);
                }
              }}
            >
              {" "}
              Sign Up
            </Text>
          }
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignContent: "center",
  },

  footerTextContainer: {
    // flex: 1,
    // backgroundColor: 'red',
    alignItems: "center",
    //textAlign: "center",
    justifyContent: "flex-end",
  },

  footerText: {
    fontSize: 20,
    color: colors.BLACK,
    fontWeight: "bold",
  },
});
