import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleProp,
  ViewStyle,
  TextStyle,
} from "react-native";
import { colors } from "./Color";

type buttonProps = {
  title: any;
  titleShown?: boolean;
  textColor?: any;
  textStyle?: TextStyle;
  textContainerStyle?: ViewStyle;
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
          Alert.alert("Alert!", " button clicked");
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
    backgroundColor: colors.DARK_GRAY,
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
    //padding: 10
    // overflow: 'hidden',
    //height: 40, width: 40, flex: 1, backgroundColor: 'red'
    //padding: 5,
    // height: 40,
    // width: 40
  },

  text: {
    fontSize: 30,
    //justifyContent: 'center',
    textAlign: "center",
    color: colors.WHITE,
    padding: 5,
  },

});
