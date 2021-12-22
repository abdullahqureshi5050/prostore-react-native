import React, { useState } from "react";
import { View, StyleSheet, Image, Button } from "react-native";
import * as ImagePicker from "expo-image-picker";

import ImageInput from "./ImageInput";

export function ImagePickerComponent() {
  const [pickedImageUri, setPickedImageUri] = useState();

  const showImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You need to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    console.log(result);
    try {
      if (!result.cancelled) {
        let selectedImage: any = result.uri;
        setPickedImageUri(selectedImage);
        console.log(result.uri);
      }
    } catch (error) {
      console.log("Error reading of an image", error);
    }
  };

  // This function is triggered when the "Open camera" button pressed
  //   const openCamera = async () => {
  //     const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

  //     if (permissionResult.granted === false) {
  //       alert("You've refused to allow this appp to access your camera!");
  //       return;
  //     }

  //     const result = await ImagePicker.launchCameraAsync();

  //     console.log(result);

  //     if (!result.cancelled) {
  //       setPickedImagePath(result.uri);
  //       console.log(result.uri);
  //     }
  //   };

  return (
    // <View>
    //   <Button onPress={()=>{}} title={'no body here'}/>
    // </View>
    <ImageInput
      imageURI={pickedImageUri}
      onChangeImage={(uri: any) => setPickedImageUri(uri)}
    ></ImageInput>
  );
}

//export default ImagePickerComponent;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    width: 400,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  imageContainer: {
    padding: 30,
  },
  image: {
    width: 400,
    height: 300,
    resizeMode: "cover",
  },
});
