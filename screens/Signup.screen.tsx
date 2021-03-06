import React from "react";
import { StyleSheet, View, Text, Alert, ScrollView } from "react-native";
import { TextInputC } from "../components/TextInput";
import { ButtonC } from "../components/Button";
import { CheckBoxC } from "../components/CheckBox";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { colors } from "../components/Color";

export const SignUpScreen = () => {
  return (
    <View style={styles.root}>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.signUpText}>
              Sign
              {
                <Text
                  style={{ ...styles.signUpText, color: colors.FOREST_GREEN }}
                >
                  {" "}
                  Up
                </Text>
              }
            </Text>
          </View>
          <View>
            <Text style={styles.signUpParagraph}>Create a new account!</Text>
          </View>
        </View>
        <View style={styles.signUpContainer}>
          <TextInputC
            textInputContainerStyle={{ marginVertical: 5 }}
            placeholder="Full Name"
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
            placeholder="Phone number"
            icon={
              <MaterialIcons
                name="alternate-email"
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
          <TextInputC
            textInputContainerStyle={{ marginVertical: 5 }}
            placeholder="Confirm password"
            icon={<Feather name="lock" size={24} color={colors.FOREST_GREEN} />}
          />
          <CheckBoxC />
          <ButtonC
            textContainerStyle={{ backgroundColor: colors.BLACK }}
            title={"Sign Up"}
          />
        </View>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>
            Have an account?
            {
              <Text
                style={{
                  ...styles.footerText,
                  color: colors.FOREST_GREEN,
                  flex: 1,
                }}
                onPress={() => {
                  try {
                    Alert.alert("Alert!", "msg");
                  } catch (error: any) {
                    Alert.alert("Alert!", error);
                  }
                }}
              >
                {" "}
                Log In
              </Text>
            }
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    //margin: 20,
    backgroundColor: colors.WHITE,
    // android
    elevation: 2,
    //height: "100%",
  },

  paragraph: {
    fontSize: 15,
  },

  signUpContainer: {
    //flex: 1,
    paddingHorizontal: 10,
  },

  signUpText: {
    color: colors.BLACK,
    fontSize: 40,
    marginLeft: 12,
    fontWeight: "bold",
  },

  signUpParagraph: {
    marginLeft: 12,
    color: colors.BLACK,
    fontSize: 20,
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
