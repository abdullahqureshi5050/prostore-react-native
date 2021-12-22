import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions';

export const LocationPicker = () => {
    
    const [mapLocationState, setMapLocationState]: any = useState('')
    const verifyPermission = async ()=>{
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        Alert.alert('Permisssion', 'Location Access is denied. Maps cannot be used without location access')
            return false;
      }
        // const result = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
        // if(result.status !=='granted'){
        //     Alert.alert('Permisssion', 'Location Access is denied. Maps cannot be used without location access')
        //     return false
        // }
        return true
    }
    const LocationPickerHandler = async ()=>{
        //Alert.alert('Permisssion', 'Location Access is required to show maps')
        const hasPermission = await verifyPermission()
        try{
            if(hasPermission){
                let location = await Location.getCurrentPositionAsync({});
                //const location = Location.getCurrentPositionAsync({timeInterval: 5000})
                Alert.alert('Permission', `Access Allowed: ${location}`)
                console.log('location: ',location)
                setMapLocationState({
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                })
                return;
            }
            else 
            Alert.alert('Permisssion', 'Location Access is required to show maps')
                return;
            }
       catch(err){
            console.log('error: L001 Somthing went wrong. ',err)
        }
    }

  return (
      <View>
          <View style={styles.location}>
              <Text>{mapLocationState?[`latitude: ${mapLocationState.lat}`,` longitude: ${mapLocationState.lng}`] :'no location'}</Text>
          </View>
          <Button title='Set my current location' onPress={LocationPickerHandler} />
      </View>
  )
};

const styles = StyleSheet.create({
    location: {
        //width: '100%',
        height: 250,
        //borderColor: 'black',
        borderRadius: 10,
        margin: 10,
        padding: 10,
        borderWidth: 1
    }
});
