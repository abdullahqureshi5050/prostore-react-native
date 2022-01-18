import React, { ReactElement, useState } from "react";
import { NativeSyntheticEvent, NativeTouchEvent, StyleProp, StyleSheet, TextInput, TextInputFocusEventData, TextStyle, View, ViewStyle } from "react-native";
import PropTypes from 'prop-types';

type textInputProps = {
 /**
     * Callback that is called when the text input is focused
     */
  onFocus?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;

    /**
     * Callback that is called when the text input is blurred
     */
     onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;

  textInputContainerStyle?:  ViewStyle,
  textInputStyle?: TextStyle,
  iconStyle?: ViewStyle,
  onChangeText?: Function | any,
  placeholder?: string | undefined,
  value?: string,
  keyboardType?: string | any,
  icon?: PropTypes.ReactElementLike,
  numberOfLines?: number | undefined
}

export const TextInputC = (props: textInputProps) => {
  
  const [textState, setTextState] = useState("");
  
  return (
    <View style={{...styles.textInputContainer, ...props.textInputContainerStyle }}>
      <View style={{...styles.iconView, ...props.iconStyle}}>{props.icon}</View>
      <View style={{...styles.textInputView, ...{
    elevation: 15,
    //overflow: "hidden",
    }}}>
        <TextInput
          onFocus={ props.onFocus}
          onBlur={ props.onBlur}
          style={{...styles.textInput, ...props.textInputStyle }}
          onChangeText={setTextState}
          value={textState}
          numberOfLines={props.numberOfLines || 1}
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
    fontSize: 16,
  },

  textInputContainer: {
    flexDirection: "row",
    //marginHorizontal: 10,
    borderWidth: 1,
    //marginVertical: 5,
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