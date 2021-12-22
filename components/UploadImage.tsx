import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import { ImageInput } from "./ImageInput";
import ImageCropper from 'react-native-image-crop-picker';

export const UploadImage= ()=> {
  const [selectedImageState, setSelectedImageState] = React.useState(undefined) ;
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    //console.log(pickerResult);
    if (pickerResult.cancelled === true) {
      return;
    }
    let selectedImg: any  = pickerResult.uri;
    console.log(selectedImg)
    setSelectedImageState(selectedImg);
  };
  
  if (selectedImageState !== undefined) {
    return (
      <View>
      <Image
        source={{uri: selectedImageState}}
        width={300}
        height={200}
      />
      </View>
    )
    // ImageCropper.openPicker({
    //   width: 300,
    //   height: 400,
    //   cropping: true
    // }).then(image => {
    //   console.log(image);
    // })
    // ImageCropper.openCropper(
    //     {
    //       path: selectedImageState,
    //       width: 200,
    //       height: 300,
    //       mediaType: 'photo'
    //     }
    //     // path: selectedImageState,
    //     // width: 300,
    //     // height: 400
    
    // ).then(image => {
    //   return console.log('fhsjkfhfkj')
    //   //return console.log(image);
    // });
  }
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text>
      <Button onPress={openImagePickerAsync} title={'Pick a photo'} />
      <TouchableOpacity onPress={openImagePickerAsync} style={styles.button}>
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  instructions: {},
  buttonText: {},
  button: {},
  logo: {flex: 1},
  thumbnail: {
    width: 300,
    height: 300,
    resizeMode: "contain"
  }
})