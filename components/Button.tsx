import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "./Color";

type buttonProps = {
  title: any;
  titleShown?: boolean;
  textColor?: any;
  textStyle?: ViewStyle;
  textContainerStyle?: any;
};

export const ButtonC = (props: buttonProps) => {
  const [titleState, setTitleState] = useState(true);
  useEffect(() => {
    (props.titleShown == false) ? setTitleState(false) : setTitleState(true);
    return () => {};
  }, [props.titleShown]);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        try {
          Alert.alert("Alert!", "signup button clicked");
        } catch (error: any) {
          Alert.alert("Alert!", error);
        }
      }}
    >
      <View style={{ ...styles.textView, ...props.textContainerStyle }}>
        {titleState && (
          <Text style={{ ...styles.text, ...props.textStyle }}>
            { props.title || "No title" }
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
  //<Button title='Sign Up' onPress={()=>{}} />
};

const styles = StyleSheet.create({
  textView: {
    padding: 5,
  },

  text: {
    backgroundColor: colors.FOREST_GREEN,
    fontSize: 30,
    //justifyContent: 'center',
    textAlign: "center",
    borderRadius: 10,
    color: colors.WHITE,
    paddingVertical: 10,
  },

});
