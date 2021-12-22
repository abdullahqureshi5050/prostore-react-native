import React from "react";
import { 
    StyleSheet,
    View,
    Text
 } from 'react-native';
 import { TextInputC } from "../components/TextInput";
 import { Ionicons } from '@expo/vector-icons';

 export const HomeScreen = ()=>{
     return (
        <View>
            <TextInputC icon={<Ionicons name="location-outline" size={24} color="black" />}></TextInputC>
            <TextInputC icon={<Ionicons name="search" size={24} color="black" />}></TextInputC>
        </View> 
     )
 }

 const styles = StyleSheet.create({

 })