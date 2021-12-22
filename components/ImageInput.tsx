import React, { useEffect } from "react";

import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

//import colors from "../config/colors";
type imageInputProps = {
  imageURI: any, 
  onChangeImage: any
}

export function ImageInput(props: imageInputProps) {
  const handlePress = () => {
    if (!props.imageURI) {
      selectImage();
    } else
      Alert.alert("Delete", "Are you sure to delete this image?", [
        {
          text: "Yes",
          onPress: () => {
            props.onChangeImage(null);
          },
        },
        {
          text: "No",
        },
      ]);
  };

  const selectImage = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You need to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.5,
    });
    try {
      if (!result.cancelled) {
        props.onChangeImage(result.uri);
      }
    } catch (error) {
      console.log("Error reading of an image", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!props.imageURI && (
          <MaterialCommunityIcons
            name="camera"
            size={50}
            color={'black'}
          ></MaterialCommunityIcons>
        )}
        {props.imageURI && (
          <Image style={styles.image} source={{ uri: props.imageURI }}></Image>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray",
    height: 100,
    width: 100,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
