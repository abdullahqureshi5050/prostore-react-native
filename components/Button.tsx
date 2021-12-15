import React from 'react';
import { 
    StyleSheet, View, Text, TouchableOpacity, Alert
 } from "react-native";
import { colors } from "./Color";
 export const ButtonC = (props: any)=>{
         
    return (
        <TouchableOpacity activeOpacity={0.9} onPress={()=>{
            try {
                Alert.alert('Alert!', 'signup button clicked');
              } catch (error: any) {
                Alert.alert('Alert!', error);
              }
        }} >
            <View style={styles.textView}>
                <Text style={styles.text}>{props.title || 'No Title'}</Text>
            </View>
        </TouchableOpacity>
    )
    //<Button title='Sign Up' onPress={()=>{}}/>
 }

 const styles = StyleSheet.create({
    
    textView: {
        padding: 5,
    },

    text: {
        backgroundColor: colors.DARK_GRAY,
        fontSize: 30,
        //justifyContent: 'center',
        textAlign: 'center',
        borderRadius: 10,
        color: colors.WHITE,
        paddingVertical: 10 
    }
 })