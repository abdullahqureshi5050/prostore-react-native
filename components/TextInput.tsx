import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export const TextInputC = (props: any) => {
  const [textState, setTextState] = useState("");

  return (
    <View style={styles.textInputContainer}>
      <View style={styles.iconView}>{props.icon}</View>
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          onChangeText={setTextState}
          value={textState}
          placeholder={props.placeholder || ""}
          keyboardType={props.keyboardType || "default"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    //height: 40,
    marginVertical: 12,
    marginRight: 12,
    //padding: 10,
    fontSize: 20,
  },

  textInputContainer: {
    flexDirection: "row",
    marginHorizontal: 10,
    borderWidth: 1,
    marginVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },

  textInputView: {
    flex: 1,
  },

  iconView: {
    justifyContent: "center",
  },
});
