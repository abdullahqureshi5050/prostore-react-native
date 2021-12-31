import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { ButtonC } from "../components/Button";
export const ProductScreen = (props: any)=>{
    return (
        <View style={styles.root} >
            <Text>Product Screen</Text>
            <ButtonC title={'Add To My Cart'} ></ButtonC>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'red'
    }
})